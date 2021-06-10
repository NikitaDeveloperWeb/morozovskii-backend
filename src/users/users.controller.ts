import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { User } from './schemas/users.shema';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  // get all users
  @Get()
  getAll(): Promise<User[]> {
    return this.UsersService.getAll();
  }
  // get one users
  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.UsersService.getById(id);
  }

  // create new user
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createUserDto: CreateUsersDto): Promise<User> {
    return this.UsersService.create(createUserDto);
  }

  // edit user
  @Put(':id')
  update(
    @Body() updateUserDto: UpdateUsersDto,
    @Param('id') id: string,
  ): Promise<User> {
    return this.UsersService.update(id, updateUserDto);
  }

  // delete  user
  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.UsersService.remove(id);
  }

  //get user from phone
}
