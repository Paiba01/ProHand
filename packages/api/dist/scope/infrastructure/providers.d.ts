import MongooseScopesFinder from './services/mongoose-finder';
import MongooseScopes from './services/mongoose-scopes';
declare const scopeProviders: ({
    provide: string;
    useClass: typeof MongooseScopes;
} | {
    provide: string;
    useClass: typeof MongooseScopesFinder;
})[];
export default scopeProviders;
