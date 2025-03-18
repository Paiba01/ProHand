import { Exception } from "~/shared/domain";
export declare class InvalidDay extends Exception {
    static causeIsNotInteger(): InvalidDay;
}
