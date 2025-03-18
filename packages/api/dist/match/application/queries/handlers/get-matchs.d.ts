import { IQueryHandler } from '@nestjs/cqrs';
import MatchsFinder from '../../services/finder';
import { MatchDto } from '~/match/dto/response/match';
export declare class GetMatchsHandler implements IQueryHandler {
    private readonly matchsFinder;
    constructor(matchsFinder: MatchsFinder);
    execute(): Promise<MatchDto[]>;
}
