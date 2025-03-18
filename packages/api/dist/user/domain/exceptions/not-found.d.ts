import { Exception } from "~/shared/domain";
export declare class NotFoundUser extends Exception {
    static withId(id: string): NotFoundUser;
    static withEmail(email: string): NotFoundUser;
    static withIsActive(isActive: boolean): NotFoundUser;
}
