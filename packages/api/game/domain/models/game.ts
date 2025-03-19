import { AggregateRoot } from '@nestjs/cqrs'

import GameId from './id'
import Club from '~/club/domain/models/club'


class Game extends AggregateRoot {
  private _id: GameId
  private _club: Club


  private constructor(
    id: GameId,
    club: Club,


  ) {
    super()
    this._id = id
    this._club = club

  }

  static create({
    id,
    club,

  }: {
    id: GameId
    club: Club

 
  }) {
    return new this(id,club)
  }

  get id(): GameId {
    return this._id
  }

  get club(): Club {
    return this._club
  }
}

export default Game
