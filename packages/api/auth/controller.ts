import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express'; // Añadir esta importación

import { AuthService } from './service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: { email: string }) {
    const { email } = loginDTO;

    const isValid = await this.authService.validateUser(email);

    if (!isValid) {
      throw new UnauthorizedException();
    }
    
    // Aquí deberías generar y devolver un JWT token
    return { message: 'Login successful' };
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    // Este endpoint inicia el flujo de autenticación con Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    // Este endpoint es llamado por Google después de la autenticación
    const user = req.user;
    
    // Generar el JWT token (asumiendo que tienes el método en tu servicio)
    const token = this.authService.generateJwtToken(user);
    
    // Redirigir al frontend con el token
    res.redirect(`http://tu-frontend-url/#/auth-callback?token=${token}`);
  }
}