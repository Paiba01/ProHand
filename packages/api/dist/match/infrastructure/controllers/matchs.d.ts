import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MatchDto } from '~/match/dto/response/match';
import { EditMatchDateDto } from '~/match/dto/request/edit-match';
import { DesignateRefereesDto } from '~/match/dto/request/designate-referees';
export declare class MatchsController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getMatchs(): Promise<MatchDto[]>;
    getMatchsByCompetitionId(competitionId: string): Promise<MatchDto[]>;
    getMatch(id: string): Promise<MatchDto>;
    getMatchsOfUser(userId: string): Promise<MatchDto[]>;
    editMatchDate(dto: EditMatchDateDto, id: string): Promise<void>;
    designateReferees(dto: DesignateRefereesDto, id: string): Promise<void>;
    deleteMatch(id: string): Promise<void>;
}
