import { Exception } from '~/shared/domain';
declare class InvalidUserEmail extends Exception {
    static causeIsBlank(): InvalidUserEmail;
    static causeInvalidFormat(): InvalidUserEmail;
}
export default InvalidUserEmail;
