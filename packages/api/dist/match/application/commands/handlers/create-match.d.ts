import { ICommandHandler } from "@nestjs/cqrs";
import { CreateMatch } from "../create-match";
import { Result } from "neverthrow";
import { InvalidId } from "~/shared/domain";
import { InvalidTeam } from "~/match/domain/exceptions/invalid-team";
import Matchs from "~/match/domain/services/matchs";
export declare class CreateMatchHandler implements ICommandHandler {
    private readonly matchs;
    constructor(matchs: Matchs);
    execute(command: CreateMatch): Promise<Result<void, InvalidId | InvalidTeam>>;
}
