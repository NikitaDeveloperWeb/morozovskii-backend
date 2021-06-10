import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  private user;
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.user = this.authService.login(req.user._doc);
    return this.authService.login(req.user._doc);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    if (this.user) {
      return this.user;
    }
  }
}
