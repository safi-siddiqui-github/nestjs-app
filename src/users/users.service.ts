import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  getUser(): User {
    return {
      id: '1',
      email: 'safi@gmail.com',
      password: 'safi-pass',
    };
  }
}
