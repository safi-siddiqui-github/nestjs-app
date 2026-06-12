import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { UserDto } from '../../dtos/users/user.dto/user.dto';
import { type UserInterface } from '../../interfaces/users/user-interface/user-interface.interface';

@Controller('users')
export class UsersController {
  @Get()
  findAll(
    @Req() request: Request,
    @Param() params: UserInterface,
    @Query() query: UserInterface,
    @Body() body: UserInterface,
  ): [] {
    console.log(query?.email, 'query');
    return [];
  }

  @Post()
  create(@Body() body: UserDto): UserDto {
    return body;
  }

  // :id token
  @Patch(':id')
  update(
    @Body() body: UserInterface,
    @Param() params: UserInterface,
  ): UserInterface {
    return body;
  }

  @Delete(':id')
  delete(@Param() params: UserInterface): void {
    return;
  }
}
