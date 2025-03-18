import { IQueryHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import MatchsFinder from '../../services/finder';
import { MatchDto } from '~/match/dto/response/match';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import { GetMatchsByCompetition } from '../get-matchs-by-competition';
export declare class GetMatchsByCompetitionHandler implements IQueryHandler {
    private readonly matchsFinder;
    constructor(matchsFinder: MatchsFinder);
    execute(query: GetMatchsByCompetition): Promise<Result<MatchDto[], InvalidId | NotFoundMatch>>;
}
