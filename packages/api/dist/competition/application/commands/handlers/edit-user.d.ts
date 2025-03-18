import { ICommandHandler } from "@nestjs/cqrs";
import { Result } from "neverthrow";
import Competitions from "~/competition/domain/services/competitions";
import CompetitionsFinder from "../../services/finder";
import { EditCompetition } from "../edit-competition";
import { InvalidId } from "~/shared/domain";
import { InvalidName } from "~/competition/domain/exceptions/invalid-name";
import { InvalidCategory } from "~/competition/domain/exceptions/invalid-category";
import { NotFoundCompetition } from "~/competition/domain/exceptions/not-found";
export declare class EditCompetitionHandler implements ICommandHandler {
    private readonly Competitions;
    private readonly CompetitionsFinder;
    constructor(Competitions: Competitions, CompetitionsFinder: CompetitionsFinder);
    execute(command: EditCompetition): Promise<Result<void, InvalidId | InvalidName | InvalidCategory | NotFoundCompetition>>;
}
