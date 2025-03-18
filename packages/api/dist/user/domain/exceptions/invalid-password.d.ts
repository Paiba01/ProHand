import { Exception } from '~/shared/domain';
declare class InvalidUserPassword extends Exception {
    static causeIsBlank(): InvalidUserPassword;
}
export default InvalidUserPassword;
