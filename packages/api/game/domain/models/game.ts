import { AggregateRoot } from '@nestjs/cqrs'
import GameId from './id'
import Club from '~/club/domain/models/club'

import GameConfig from './gameConfig'
import GameFinishedEvent from '../events/GameFinishedEvent'
import PlayerJoinedGameEvent from '../events/PlayerJoinedGameEvent'
import Player from '~/player/domain/models/player'


class Game extends AggregateRoot {
  private _id: GameId
  private _club: Club
  private _players: Player[]
  private _config: GameConfig
  private _isFinished: boolean

  private constructor(id: GameId, club: Club, config: GameConfig) {
    super()
    this._id = id
    this._club = club
    this._players = []
    this._config = config
    this._isFinished = false
  }
  static create({ id, club, config }: { id: GameId; club: Club; config: GameConfig }) {
    return new this(id, club, config)
  }

  get id(): GameId {
    return this._id
  }

  get club(): Club {
    return this._club
  }

  get players(): Player[] {
    return this._players
  }

  get config(): GameConfig {
    return this._config
  }

  get isFinished(): boolean {
    return this._isFinished
  }

  addPlayer(player: Player) {
    if (this._isFinished) throw new Error('Cannot add players to a finished game')
    this._players.push(player)
    this.apply(new PlayerJoinedGameEvent(this._id, player))
  }

  finishGame() {
    this._isFinished = true
    this.apply(new GameFinishedEvent(this._id))
  }
}

export default Game
