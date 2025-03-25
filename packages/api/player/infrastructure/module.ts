import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose'
import { BuyAthleteHandler } from '~/player/application/commands/handlers/buy-athlete'
import { PlayersController } from './controllers/players'
import { PlayerSchema } from './models/mongoose/schema'
import { playerProviders } from './providers'


const controllers = [PlayersController]

const commandHandlers = [
  BuyAthleteHandler,
]

@Module({
  controllers,
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: PlayerSchema.name,
        schema: SchemaFactory.createForClass(PlayerSchema),
      },
    ]),
  ],
  providers: [...commandHandlers, ...playerProviders],
})
export class UserModule {
  constructor() {}
}
