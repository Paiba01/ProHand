import { Exception } from '~/shared/domain';
declare class InvalidUserName extends Exception {
    static causeIsBlank(): InvalidUserName;
}
export default InvalidUserName;
