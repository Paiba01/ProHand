import { Result } from "neverthrow";
import { ValueObject } from "~/shared/domain";
import { InvalidDay } from "../exceptions/invalid-day";
export declare class Day extends ValueObject<number> {
    private constructor();
    static fromNumber(value: number): Result<Day, InvalidDay>;
}
