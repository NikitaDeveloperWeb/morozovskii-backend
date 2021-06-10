/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { User, UserDocument } from './schemas/users.shema';
import * as _ from 'lodash';
import { generateMD5 } from 'src/utils/generateHash';
import { jwtConstants } from 'src/auth/constants';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private UserModel: Model<UserDocument>) {}
  private readonly users = this.UserModel.find().exec();

  async getById(id: string): Promise<User> {
    return this.UserModel.findById(id);
  }
  async getAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }

  async create(userDto: CreateUsersDto): Promise<User> {
    const pass = userDto.password + jwtConstants.secret;
    const pass2 = userDto.password2 + jwtConstants.secret;
    const hash = generateMD5(pass);
    if (hash === generateMD5(pass2)) {
      const newUser = new this.UserModel(
        _.assignIn(userDto, { password: hash, password2: generateMD5(pass2) }),
      );
      return await newUser.save();
    } else {
      return undefined;
    }
  }

  async remove(id: string): Promise<User> {
    return this.UserModel.findByIdAndRemove(id);
  }

  async update(id: string, userDto: UpdateUsersDto): Promise<User> {
    const pass = userDto.password + jwtConstants.secret;
    const pass2 = userDto.password2 + jwtConstants.secret;
    const hash = generateMD5(pass);
    if (hash === generateMD5(pass2)) {
      const newUser = new this.UserModel(
        _.assignIn(userDto, { password: hash, password2: generateMD5(pass2) }),
      );
      return this.UserModel.findByIdAndUpdate(id, userDto, { new: true });
    } else {
      return undefined;
    }
  }

  async findOne(username: string): Promise<User | undefined> {
    console.log(username);
    return (await this.users).find((user) => user.username === username);
  }
}
