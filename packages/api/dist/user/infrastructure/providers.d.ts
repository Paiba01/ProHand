import { MongooseUsersFinder } from "./services/mongoose-finder";
import { MongooseUsers } from "./services/mongoose-users";
export declare const userProviders: ({
    provide: string;
    useClass: typeof MongooseUsers;
} | {
    provide: string;
    useClass: typeof MongooseUsersFinder;
})[];
