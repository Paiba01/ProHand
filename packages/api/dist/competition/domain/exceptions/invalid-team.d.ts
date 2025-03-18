import { Exception } from "~/shared/domain";
export declare class InvalidTeam extends Exception {
    static causeIsBlank(): InvalidTeam;
}
