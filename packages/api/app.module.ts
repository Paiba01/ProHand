import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ConsoleModule } from 'nestjs-console'

import LoggerMiddleware from '~/middleware/logger'

import { UserModule } from './user/infrastructure/module'

import { AuthModule } from './auth/module' 

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`,
        `.env.${process.env.NODE_ENV}`,
        '.env.local',
        '.env',
      ],
      isGlobal: true,
    }),
    ConsoleModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || '', {}),
    UserModule,
    AuthModule, 
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}