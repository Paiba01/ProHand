import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCompetitionDto } from '~/competition/dto/request/create-competition';
import { CompetitionDto } from '~/competition/dto/response/competition';
import { EditCompetitionDto } from '~/competition/dto/request/edit-competition';
export declare class CompetitionsController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getCompetitions(): Promise<CompetitionDto[]>;
    getCompetition(id: string): Promise<CompetitionDto>;
    createCompetition(dto: CreateCompetitionDto): Promise<void>;
    deleteCompetition(id: string): Promise<void>;
    editUser(dto: EditCompetitionDto, id: string): Promise<void>;
}
