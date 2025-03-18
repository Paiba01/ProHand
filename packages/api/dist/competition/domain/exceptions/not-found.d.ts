import { Exception } from '~/shared/domain';
export declare class NotFoundCompetition extends Exception {
    static withId(id: string): NotFoundCompetition;
}
