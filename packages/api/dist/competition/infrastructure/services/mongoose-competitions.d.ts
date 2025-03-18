import { Model } from 'mongoose';
import { CompetitionSchema } from '../models/mongoose/schema';
import Competitions from '~/competition/domain/services/competitions';
import { CompetitionId } from '~/competition/domain/models/id';
import { Competition } from '~/competition/domain/models/competition';
export declare class MongooseCompetitions implements Competitions {
    private readonly competitions;
    constructor(competitions: Model<CompetitionSchema>);
    create(competition: Competition): Promise<void>;
    delete(id: CompetitionId): Promise<void>;
    edit(competition: Competition): Promise<void>;
}
