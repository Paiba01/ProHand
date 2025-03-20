type FinishGameType = {
    gameId: string
  }
  
  export class FinishGame implements FinishGameType {
    constructor(readonly gameId: FinishGameType['gameId']) {}
  
    static with({ gameId }: FinishGameType): FinishGame {
      return new this(gameId)
    }
  }
  