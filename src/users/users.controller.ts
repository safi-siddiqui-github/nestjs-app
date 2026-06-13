import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { type User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Param() params: User, @Query() query: User): [] {
    console.log(query, 'query');
    return [];
  }

  @Get(':id')
  findFirst(@Param() params: User): User {
    console.log(params?.id);
    return this?.usersService?.getUser();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    console.log(createUserDto);
    return createUserDto;
  }

  // :id token
  @Patch(':id')
  update(@Param() params: User, @Body() updateUserDto: UpdateUserDto): User {
    console.log(params, updateUserDto);
    return updateUserDto;
  }

  @Delete(':id')
  delete(@Param() params: User): void {
    console.log(params?.id);
    return;
  }
}
