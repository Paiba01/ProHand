type JoinGameType = {
  gameId: string
  playerId: string
}

export class JoinGame implements JoinGameType {
  constructor(
    readonly gameId: JoinGameType['gameId'],
    readonly playerId: JoinGameType['playerId']
  ) {}

  static with({ gameId, playerId }: JoinGameType): JoinGame {
    return new this(gameId, playerId)
  }
}
