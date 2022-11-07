import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('me')
  getUser() {
    return 'user info';
  }
}
