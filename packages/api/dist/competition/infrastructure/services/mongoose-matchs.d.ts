import { Model } from 'mongoose';
import { MatchSchema } from '../models/mongoose/schema';
import Matchs from '~/match/domain/services/matchs';
import Match from '~/match/domain/models/match';
import { MatchId } from '~/match/domain/models/id';
export declare class MongooseMatchs implements Matchs {
    private readonly matchs;
    constructor(matchs: Model<MatchSchema>);
    create(match: Match): Promise<void>;
    delete(id: MatchId): Promise<void>;
}
