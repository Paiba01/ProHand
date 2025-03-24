import { AggregateRoot } from '@nestjs/cqrs'
import AthleteId from './id'


class Athlete extends AggregateRoot {
  private _id: AthleteId





  private constructor(
    id: AthleteId,


  ) {
    super()
    this._id = id

  }

  static create({
    id,

  }: {
    id: AthleteId

 
  }) {
    return new this(id,)
  }

  get id(): AthleteId {
    return this._id
  }

}

export default Athlete
