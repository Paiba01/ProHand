import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose'
import { BuyAthleteHandler } from '~/player/application/commands/handlers/buy-athlete'


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
  providers: [...commandHandlers, ...userProviders],
})
export class UserModule {
  constructor() {}
}
