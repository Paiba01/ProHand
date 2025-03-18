import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import { InvalidName } from '../exceptions/invalid-name';
export declare class Name extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<Name, InvalidName>;
}
