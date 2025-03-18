import { CommandBus, QueryBus } from '@nestjs/cqrs';
import CreateScopeDto from '~/scope/dto/request/create-scope';
import EditScopeDto from '~/scope/dto/request/edit-scope';
import ScopeDto from '~/scope/dto/response/scope';
declare class ScopesController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getScopes(): Promise<ScopeDto[]>;
    getScope(id: string): Promise<ScopeDto>;
    createScope(dto: CreateScopeDto): Promise<void>;
    editScope(dto: EditScopeDto, id: string): Promise<void>;
    deleteScope(id: string): Promise<void>;
}
export default ScopesController;
