import { ICommandHandler } from "@nestjs/cqrs";
import { CreateUser } from "../create-user";
import { InvalidId } from "~/shared/domain";
import InvalidUserName from "~/user/domain/exceptions/invalid-name";
import InvalidUserEmail from "~/user/domain/exceptions/invalid-email";
import InvalidUserPassword from "~/user/domain/exceptions/invalid-password";
import { Result } from "neverthrow";
import Users from "~/user/domain/services/users";
export declare class CreateUserHandler implements ICommandHandler {
    private readonly users;
    constructor(users: Users);
    execute(command: CreateUser): Promise<Result<void, InvalidId | InvalidUserName | InvalidUserEmail | InvalidUserPassword>>;
}
