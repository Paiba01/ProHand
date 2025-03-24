import PlayerId from './id'
import Game from '~/game/domain/models/game'
import AthleteId from '~/athlete/domain/models/id'
import UserId from '~/user/domain/models/id'
import GameId from '~/game/domain/models/id'

class Player {
  private _id: PlayerId
  private _userId: UserId
  private _gameId: GameId
  private _ranking: number
  private _cash: number
  private _athletesIds: AthleteId[]

  private static readonly MAX_ATHLETES = 16

  private constructor(id: PlayerId, userId: UserId, gameId: GameId, cash: number) {
    this._id = id
    this._userId = userId
    this._gameId = gameId
    this._ranking = 0
    this._cash = cash
    this._athletesIds = []
  }

  static create({ id, userId, gameId, cash }: { id: PlayerId; userId: UserId; gameId: GameId; cash: number }) {
    return new this(id, userId, gameId, cash)
  }

  get id(): PlayerId {
    return this._id
  }

  get userId(): UserId {
    return this._userId
  }

  get gameId(): GameId {
    return this._gameId
  }

  get ranking(): number {
    return this._ranking
  }

  get cash(): number {
    return this._cash
  }

  get athletesIds(): AthleteId[] {
    return this._athletesIds
  }

  set ranking(position: number) {
    if (position < 1) throw new Error('Ranking must be greater than 0')
    this._ranking = position
  }

  increaseCash(amount: number) {
    if (amount < 0) throw new Error('Amount must be positive')
    this._cash += amount
  }

  decreaseCash(amount: number) {
    if (amount < 0) throw new Error('Amount must be positive')
    if (this._cash < amount) throw new Error('Not enough cash')
    this._cash -= amount
  }

  addAthlete(athleteId: AthleteId) {
    if (this._athletesIds.length >= Player.MAX_ATHLETES) {
      throw new Error(`Cannot add more than ${Player.MAX_ATHLETES} athletes`)
    }
    this._athletesIds.push(athleteId)
  }

  removeAthlete(athleteId: AthleteId) {
    this._athletesIds = this._athletesIds.filter(id => id !== athleteId)
  }
}

export default Player
