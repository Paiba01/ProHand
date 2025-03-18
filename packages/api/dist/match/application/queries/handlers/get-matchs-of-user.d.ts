import { IQueryHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import MatchsFinder from '../../services/finder';
import { MatchDto } from '~/match/dto/response/match';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import { GetMatchsOfUser } from '../get-matchs-of-user';
export declare class GetMatchsOfUserHandler implements IQueryHandler {
    private readonly matchsFinder;
    constructor(matchsFinder: MatchsFinder);
    execute(query: GetMatchsOfUser): Promise<Result<MatchDto[], InvalidId | NotFoundMatch>>;
}
