import { Exception } from '~/shared/domain';
declare class HttpError {
    readonly error: Error;
    private constructor();
    static fromException(exception: Exception): HttpError;
}
export default HttpError;
