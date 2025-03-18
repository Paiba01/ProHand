import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import { InvalidCategory } from '../exceptions/invalid-category';
export declare class Category extends ValueObject<string> {
    private constructor();
    static fromString(value: string): Result<Category, InvalidCategory>;
}
