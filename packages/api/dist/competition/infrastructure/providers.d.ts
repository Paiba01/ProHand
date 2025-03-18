import { MongooseCompetitions } from "./services/mongoose-competitions";
import { MongooseMatchs } from "~/match/infrastructure/services/mongoose-matchs";
import { MongooseCompetitionsFinder } from "./services/mongoose-finder";
export declare const competitionProviders: ({
    provide: string;
    useClass: typeof MongooseCompetitions;
} | {
    provide: string;
    useClass: typeof MongooseMatchs;
} | {
    provide: string;
    useClass: typeof MongooseCompetitionsFinder;
})[];
