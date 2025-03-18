import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import InvalidUserEmail from '../exceptions/invalid-email';
declare class UserEmail extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<UserEmail, InvalidUserEmail>;
}
export default UserEmail;
