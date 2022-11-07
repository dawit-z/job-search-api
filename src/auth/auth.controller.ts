import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('create')
  create(@Body() authDto: AuthDto) {
    return this.authService.signup();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
