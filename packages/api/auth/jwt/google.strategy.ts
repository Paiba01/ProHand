import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../service';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { emails } = profile;
    const email = emails[0].value;
    
    // Validar si el usuario existe en nuestra base de datos
    const isValid = await this.authService.validateUser(email);
    
    if (isValid) {
      const user = {
        email,
        accessToken,
      };
      return done(null, user);
    }
    
    // Aquí podrías registrar automáticamente al usuario si no existe
    return done(null, false, { message: 'User not found' });
  }
}