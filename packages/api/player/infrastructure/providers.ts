import Players from "~/player/domain/services/player";
import { MongoosePlayers } from "./services/mongoose-players";


export const playerProviders = [
  {
    provide: Players,
    useClass: MongoosePlayers,
  },
];
