import { IQueryHandler } from '@nestjs/cqrs';
import CompetitionsFinder from '../../services/finder';
import { CompetitionDto } from '~/competition/dto/response/competition';
export declare class GetCompetitionsHandler implements IQueryHandler {
    private readonly competitionsFinder;
    constructor(competitionsFinder: CompetitionsFinder);
    execute(): Promise<CompetitionDto[]>;
}
