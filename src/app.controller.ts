import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { AuthExceptionFilter } from './common/filters/auth-exception.filter';
import { AuthenticatedGuard } from './common/filters/guards/authenticated.guard';
import { LoginGuard } from './common/filters/guards/login.guard';

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
  @Get('/')
  @Render('login')
  index() {
    return;
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response) {
    res.redirect('/home');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  getHome(@Request() req) {
    return { user: req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    return req.logout(()=>{
      res.redirect('/');
    });
  }
}