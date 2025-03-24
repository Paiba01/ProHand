import AthleteId from './id'

class Athlete {
  private _id: AthleteId
  private _name: string
  private _position: string
  private _age: number
  private _photo: string
  private _price: number
  private _score: number | null
  private _teamId: string

  private constructor(id: AthleteId, name: string, position: string, age: number, photo: string, price: number, score: number | null, teamId: string) {
    this._id = id
    this._name = name
    this._position = position
    this._age = age
    this._photo = photo
    this._price = price
    this._score = score
    this._teamId = teamId
  }

  static create({ id, name, position, age, photo, price, score, teamId }: { 
    id: AthleteId; 
    name: string; 
    position: string; 
    age: number; 
    photo: string; 
    price: number; 
    score: number | null; 
    teamId: string 
  }) {
    return new this(id, name, position, age, photo, price, score, teamId)
  }

  get id(): AthleteId {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get position(): string {
    return this._position
  }

  get age(): number {
    return this._age
  }

  get photo(): string {
    return this._photo
  }

  get price(): number {
    return this._price
  }

  get score(): number | null {
    return this._score
  }

  get teamId(): string {
    return this._teamId
  }

  set score(value: number | null) {
    this._score = value
  }
}

export default Athlete
