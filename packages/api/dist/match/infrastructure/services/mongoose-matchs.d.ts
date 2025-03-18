import { Model } from 'mongoose';
import { MatchSchema } from '../models/mongoose/schema';
import Matchs from '~/match/domain/services/matchs';
import Match from '~/match/domain/models/match';
import { MatchId } from '~/match/domain/models/id';
import { Result } from 'neverthrow';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import UserId from '~/user/domain/models/id';
export declare class MongooseMatchs implements Matchs {
    private readonly matchs;
    constructor(matchs: Model<MatchSchema>);
    find(id: MatchId): Promise<Result<void, NotFoundMatch>>;
    create(match: Match): Promise<void>;
    delete(id: MatchId): Promise<void>;
    editDate(matchId: MatchId, matchDay: Date): Promise<void>;
    designateReferees(matchId: MatchId, refereeId1: UserId, refereeId2: UserId): Promise<void>;
}
