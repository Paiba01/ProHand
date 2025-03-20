import { IEvent } from '@nestjs/cqrs'
import GameId from '../models/id'
import Player from '~/player/domain/models/player'


class PlayerJoinedGameEvent implements IEvent {
  constructor(
    public readonly gameId: GameId,
    public readonly player: Player
  ) {}
}

export default PlayerJoinedGameEvent
