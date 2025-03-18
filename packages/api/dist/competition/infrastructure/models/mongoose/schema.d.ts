import { Competition } from '~/competition/domain/models/competition';
export declare class CompetitionSchema {
    readonly _id: string;
    readonly name: string;
    readonly category: string;
    readonly dateFrom: Date;
    readonly dateTo: Date;
    constructor(_id: CompetitionSchema['_id'], name: CompetitionSchema['name'], category: CompetitionSchema['category'], dateFrom: CompetitionSchema['dateFrom'], dateTo: CompetitionSchema['dateTo']);
    static fromCompetition({ id, name, category, dateFrom, dateTo }: Competition): CompetitionSchema;
}
