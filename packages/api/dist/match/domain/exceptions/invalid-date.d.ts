import { Exception } from "~/shared/domain";
export declare class InvalidDate extends Exception {
    static causeIsPast(): InvalidDate;
}
