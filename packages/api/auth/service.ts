import { Injectable, Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { QueryBus } from '@nestjs/cqrs'
import { GetUserByEmail } from '~/user/application/queries/get-user-by-email'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    private queryBus: QueryBus,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string): Promise<boolean> {
    try {
      const user = await this.queryBus.execute(GetUserByEmail.with({ email }))
      // Devolver true si el usuario existe
      return !!user;
    } catch (e) {
      // Manejo más seguro del error
      const errorMessage = e instanceof Error ? e.message : 'Unknown error';
      this.logger.error(`Access error with email ${email}: ${errorMessage}`);
      return false;
    }
  }

  generateJwtToken(user: any) {
    const payload = { 
      email: user.email,
      sub: user.id || user._id,
      name: user.name || user.displayName
    };
    
    return this.jwtService.sign(payload);
  }
}