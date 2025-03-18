import { Exception } from '~/shared/domain';
declare class NotFoundScope extends Exception {
    static withId(id: string): NotFoundScope;
}
export default NotFoundScope;
