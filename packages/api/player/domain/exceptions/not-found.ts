import { Exception } from "~/shared/domain";

export class NotFoundPlayer extends Exception {
    static withId(id: string): NotFoundPlayer {
      return Exception.with(`Player with id ${id} cannot be found`)
    }
  }