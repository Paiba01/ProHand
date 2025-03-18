import { Exception } from '~/shared/domain';
export declare class InvalidName extends Exception {
    static causeIsBlank(): InvalidName;
}
