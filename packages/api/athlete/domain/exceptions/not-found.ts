import { Exception } from "~/shared/domain";

export class NotFoundAthlete extends Exception {
    static withId(id: string): NotFoundAthlete {
      return Exception.with(`Player with id ${id} cannot be found`)
    }
  }