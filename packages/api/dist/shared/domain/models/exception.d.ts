declare class Exception extends Error {
    protected constructor(message: string);
    static with(message: string): Exception;
}
export default Exception;
