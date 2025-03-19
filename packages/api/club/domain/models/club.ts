import { AggregateRoot } from '@nestjs/cqrs'
import ClubId from './id'


class Club extends AggregateRoot {
  private _id: ClubId





  private constructor(
    id: ClubId,


  ) {
    super()
    this._id = id

  }

  static create({
    id,

  }: {
    id: ClubId

 
  }) {
    return new this(id,)
  }

  get id(): ClubId {
    return this._id
  }

}

export default Club
