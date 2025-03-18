export type ValueType = {
    [key: string]: ValueType;
} | boolean | number | string | undefined | ValueType[];
declare class ValueObject<T extends ValueType> {
    readonly value: T;
    constructor(value: T);
    static equals<U extends ValueType>(a: ValueObject<U>, b: ValueObject<U>): boolean;
}
export default ValueObject;
