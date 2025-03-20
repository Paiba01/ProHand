import { IEvent } from '@nestjs/cqrs'
import GameId from '../models/id'

class GameFinishedEvent implements IEvent {
  constructor(public readonly gameId: GameId) {}
}

export default GameFinishedEvent
