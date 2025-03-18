import { Result } from 'neverthrow';
import InvalidId from '../exceptions/invalid-id';
import ValueObject from './value-object';
declare class Id extends ValueObject<string> {
    protected constructor(value: string);
    static fromString(value: string): Result<Id, InvalidId>;
}
export default Id;
