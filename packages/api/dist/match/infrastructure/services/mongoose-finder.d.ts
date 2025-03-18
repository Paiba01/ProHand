import { Model } from 'mongoose';
import { Result } from 'neverthrow';
import MatchsFinder from '~/match/application/services/finder';
import { MatchSchema } from '../models/mongoose/schema';
import { MatchId } from '~/match/domain/models/id';
import { MatchDto } from '~/match/dto/response/match';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import { CompetitionId } from '~/competition/domain/models/id';
import UserId from '~/user/domain/models/id';
export declare class MongooseMatchsFinder implements MatchsFinder {
    private readonly matchs;
    constructor(matchs: Model<MatchSchema>);
    find(id: MatchId): Promise<Result<MatchDto, NotFoundMatch>>;
    getAll(): Promise<MatchDto[]>;
    findByCompetitionId(competitionId: CompetitionId): Promise<Result<MatchDto[], NotFoundMatch>>;
    findByUserId(userId: UserId): Promise<Result<MatchDto[], NotFoundMatch>>;
}
