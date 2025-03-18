import { MongooseMatchsFinder } from "./services/mongoose-finder";
import { MongooseMatchs } from "./services/mongoose-matchs";
import { MongooseUsers } from "~/user/infrastructure/services/mongoose-users";
export declare const matchProviders: ({
    provide: string;
    useClass: typeof MongooseMatchs;
} | {
    provide: string;
    useClass: typeof MongooseMatchsFinder;
} | {
    provide: string;
    useClass: typeof MongooseUsers;
})[];
