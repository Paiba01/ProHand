import { Exception } from '~/shared/domain';
declare class InvalidScopeName extends Exception {
    static causeIsBlank(): InvalidScopeName;
}
export default InvalidScopeName;
