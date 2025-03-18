import { ICommandHandler } from "@nestjs/cqrs";
import { Result } from "neverthrow";
import { InvalidId } from "~/shared/domain";
import InvalidUserEmail from "~/user/domain/exceptions/invalid-email";
import InvalidUserName from "~/user/domain/exceptions/invalid-name";
import InvalidUserPassword from "~/user/domain/exceptions/invalid-password";
import { NotFoundUser } from "~/user/domain/exceptions/not-found";
import Users from "~/user/domain/services/users";
import { UsersFinder } from "../../services/finder";
import { EditUser } from "../edit-user";
export declare class EditUserHandler implements ICommandHandler {
    private readonly users;
    private readonly usersFinder;
    constructor(users: Users, usersFinder: UsersFinder);
    execute(command: EditUser): Promise<Result<void, InvalidId | InvalidUserName | InvalidUserEmail | InvalidUserPassword | NotFoundUser>>;
}
