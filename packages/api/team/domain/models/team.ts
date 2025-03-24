import TeamId from './id'

class Team {
  private _id: TeamId


  private constructor(id: TeamId) {
    this._id = id

  }

  static create({ id}: { id: TeamId;}) {
    return new this(id)
  }

  get id(): TeamId {
    return this._id
  }

}

export default Team
