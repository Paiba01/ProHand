import { IQueryHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import { GetMatch } from '../get-match';
import MatchsFinder from '../../services/finder';
import { MatchDto } from '~/match/dto/response/match';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
export declare class GetMatchHandler implements IQueryHandler {
    private readonly matchsFinder;
    constructor(matchsFinder: MatchsFinder);
    execute(query: GetMatch): Promise<Result<MatchDto, InvalidId | NotFoundMatch>>;
}
