import { Controller, Get } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  test(): User[] {
    return this.userService.test();
  }
}