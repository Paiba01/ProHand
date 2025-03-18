import { Result } from "neverthrow";
import { InvalidId, ValueObject } from "~/shared/domain";
import { InvalidTeam } from "../../exceptions/invalid-team";
type MatchType = {
    id: string;
    local: string;
    visitor: string;
    referee1?: string;
    referee2?: string;
    day: string;
};
export declare class Match extends ValueObject<MatchType> {
    private constructor();
    static fromPrimitives(value: MatchType): Result<Match, InvalidId | InvalidTeam>;
}
export {};
