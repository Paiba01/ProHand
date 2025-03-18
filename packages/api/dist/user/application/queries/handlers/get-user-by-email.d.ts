import { IQueryHandler } from "@nestjs/cqrs";
import { GetUserByEmail } from "../get-user-by-email";
import { UsersFinder } from "../../services/finder";
import { Result } from "neverthrow";
import InvalidUserEmail from "~/user/domain/exceptions/invalid-email";
import { UserDto } from "~/user/dto/response/user";
import { NotFoundUser } from "~/user/domain/exceptions/not-found";
export declare class GetUserByEmailHandler implements IQueryHandler {
    private readonly usersFinder;
    constructor(usersFinder: UsersFinder);
    execute(query: GetUserByEmail): Promise<Result<UserDto, InvalidUserEmail | NotFoundUser>>;
}
