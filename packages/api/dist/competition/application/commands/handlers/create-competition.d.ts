import { ICommandHandler } from "@nestjs/cqrs";
import { Result } from "neverthrow";
import { InvalidId } from "~/shared/domain";
import { CreateCompetition } from "../create-competition";
import Competitions from "~/competition/domain/services/competitions";
import { InvalidCategory } from "~/competition/domain/exceptions/invalid-category";
import { InvalidName } from "~/competition/domain/exceptions/invalid-name";
import Matchs from "~/match/domain/services/matchs";
export declare class CreateCompetitionHandler implements ICommandHandler {
    private readonly competitions;
    private readonly matchs;
    constructor(competitions: Competitions, matchs: Matchs);
    execute(command: CreateCompetition): Promise<Result<void, InvalidId | InvalidName | InvalidCategory>>;
    private getRandomWeekendDate;
}
