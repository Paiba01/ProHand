import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import Matchs from '~/match/domain/services/matchs';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import { DesignateReferees } from '../designate-referees';
import Users from '~/user/domain/services/users';
export declare class DesignateRefereesHandler implements ICommandHandler {
    private readonly matchs;
    private readonly users;
    constructor(matchs: Matchs, users: Users);
    execute(command: DesignateReferees): Promise<Result<void, InvalidId | NotFoundMatch>>;
}
