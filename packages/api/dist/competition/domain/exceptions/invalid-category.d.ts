import { Exception } from '~/shared/domain';
export declare class InvalidCategory extends Exception {
    static causeIsBlank(): InvalidCategory;
    static causeInvalidCategory(): InvalidCategory;
}
