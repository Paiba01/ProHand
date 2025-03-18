import { IQueryHandler } from "@nestjs/cqrs";
import { UserDto } from "~/user/dto/response/user";
import { UsersFinder } from "../../services/finder";
export declare class GetUsersHandler implements IQueryHandler {
    private readonly usersFinder;
    constructor(usersFinder: UsersFinder);
    execute(): Promise<UserDto[]>;
}
