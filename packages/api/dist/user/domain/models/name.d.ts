import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import InvalidUserName from '../exceptions/invalid-name';
declare class UserName extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<UserName, InvalidUserName>;
}
export default UserName;
