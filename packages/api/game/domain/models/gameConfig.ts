class GameConfig {
    private readonly _priceRange: [number, number]
    private readonly _scoringDate: Date
    private readonly _maxScoringPlayers: number
  
    constructor(priceRange: [number, number], scoringDate: Date, maxScoringPlayers: number) {
      if (priceRange[0] < 0 || priceRange[1] < priceRange[0]) {
        throw new Error('Invalid price range')
      }
      if (maxScoringPlayers <= 0) {
        throw new Error('Max scoring players must be greater than zero')
      }
  
      this._priceRange = priceRange
      this._scoringDate = scoringDate
      this._maxScoringPlayers = maxScoringPlayers
    }
  
    get priceRange(): [number, number] {
      return this._priceRange
    }
  
    get scoringDate(): Date {
      return this._scoringDate
    }
  
    get maxScoringPlayers(): number {
      return this._maxScoringPlayers
    }
  }
  
  export default GameConfig
  