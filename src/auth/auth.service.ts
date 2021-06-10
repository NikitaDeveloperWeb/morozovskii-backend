import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { generateMD5 } from 'src/utils/generateHash';
import { jwtConstants } from './constants';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(username, pass);
    if (user) {
      const hashPass = generateMD5(pass + jwtConstants.secret);
      if (user.password === hashPass) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars

        const { password, ...result } = user;
        console.log(result);
        return result;
      }
    } else {
      throw new Error('User is not defined');
    }

    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = {
      username: user.username,
      _id: user._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
      data: payload,
    };
  }
}
