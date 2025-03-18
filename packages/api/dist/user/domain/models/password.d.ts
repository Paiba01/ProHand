import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import InvalidUserPassword from '../exceptions/invalid-password';
declare class UserPassword extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<UserPassword, InvalidUserPassword>;
}
export default UserPassword;
