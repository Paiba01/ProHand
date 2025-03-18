import { IQueryHandler } from "@nestjs/cqrs";
import { Result } from "neverthrow";
import { NotFoundUser } from "~/user/domain/exceptions/not-found";
import { UserDto } from "~/user/dto/response/user";
import { InvalidId } from "~/shared/domain";
import { UsersFinder } from "../../services/finder";
import { GetUser } from "../get-user";
export declare class GetUserHandler implements IQueryHandler {
    private readonly usersFinder;
    constructor(usersFinder: UsersFinder);
    execute(query: GetUser): Promise<Result<UserDto, InvalidId | NotFoundUser>>;
}
