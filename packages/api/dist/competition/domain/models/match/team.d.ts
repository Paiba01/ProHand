import { Result } from "neverthrow";
import { ValueObject } from "~/shared/domain";
import { InvalidTeam } from "../exceptions/invalid-team";
export declare class Team extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<Team, InvalidTeam>;
}
