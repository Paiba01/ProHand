import { Exception } from '~/shared/domain';
export declare class NotFoundMatch extends Exception {
    static withId(id: string): NotFoundMatch;
    static withCompetitionId(id: string): NotFoundMatch;
    static withUserId(id: string): NotFoundMatch;
}
