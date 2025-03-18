import { Model } from 'mongoose';
import { Result } from 'neverthrow';
import { CompetitionSchema } from '../models/mongoose/schema';
import { CompetitionId } from '~/competition/domain/models/id';
import { CompetitionDto } from '~/competition/dto/response/competition';
import { NotFoundCompetition } from '~/competition/domain/exceptions/not-found';
import CompetitionsFinder from '~/competition/application/services/finder';
export declare class MongooseCompetitionsFinder implements CompetitionsFinder {
    private readonly competitions;
    constructor(competitions: Model<CompetitionSchema>);
    find(id: CompetitionId): Promise<Result<CompetitionDto, NotFoundCompetition>>;
    getAll(): Promise<CompetitionDto[]>;
}
