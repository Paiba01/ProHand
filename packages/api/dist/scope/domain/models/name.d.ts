import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import InvalidScopeName from '../exceptions/invalid-name';
declare class ScopeName extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<ScopeName, InvalidScopeName>;
}
export default ScopeName;
