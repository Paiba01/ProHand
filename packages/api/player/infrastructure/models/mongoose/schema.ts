import { Prop, Schema } from '@nestjs/mongoose'
import Player from '~/player/domain/models/player'

@Schema({ versionKey: false })
export class PlayerSchema {
  @Prop()
  readonly _id: string

  @Prop()
  readonly userId: string 

  @Prop()
  readonly gameId: string  

  @Prop()
  readonly cash: number

  @Prop({ type: [String] })  
  readonly athletesIds: string[]

  constructor(
    _id: PlayerSchema['_id'],
    userId: PlayerSchema['userId'],
    gameId: PlayerSchema['gameId'],
    cash: PlayerSchema['cash'],
    athletesIds: PlayerSchema['athletesIds'],
  ) {
    this._id = _id
    this.userId = userId
    this.gameId = gameId
    this.cash = cash
    this.athletesIds = athletesIds
  }

  static fromDomain(player: Player) {
    return new this(
      player.id.value,
      player.userId.value,
      player.gameId.value,  
      player.cash,
      player.athletesIds.map(id => id.value) 
    )
  }
}
