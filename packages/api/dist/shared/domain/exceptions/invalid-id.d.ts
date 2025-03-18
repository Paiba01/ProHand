import Exception from '../models/exception';
declare class InvalidId extends Exception {
    static causeIsBlank(): Exception;
    static causeTheFormatIsNotValid(value: string): Exception;
}
export default InvalidId;
