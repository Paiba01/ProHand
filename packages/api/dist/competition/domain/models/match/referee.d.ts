import { Result } from "neverthrow";
import { InvalidId, ValueObject } from "~/shared/domain";
declare class Referee extends ValueObject<string> {
    protected constructor(value: string);
    static fromString(value: string): Result<Referee | null, InvalidId>;
}
export default Referee;
