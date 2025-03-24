import { Result } from 'neverthrow'
import AthleteId from '../models/id'
import Athlete from '../models/athlete'
import { NotFoundAthlete } from '../exceptions/not-found'


type Athletes = {
  find(id: AthleteId): Promise<Result<Athlete, NotFoundAthlete>>
}

const Athletes = 'Athletes'

export default Athletes