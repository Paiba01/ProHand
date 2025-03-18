type CreateCompetitionType = {
    id: string;
    name: string;
    category: string;
    teams: string[];
    dateFrom: string;
    dateTo: string;
};
export declare class CreateCompetition implements CreateCompetitionType {
    readonly id: CreateCompetitionType['id'];
    readonly name: CreateCompetitionType['name'];
    readonly category: CreateCompetitionType['category'];
    readonly teams: CreateCompetitionType['teams'];
    readonly dateFrom: CreateCompetitionType['dateFrom'];
    readonly dateTo: CreateCompetitionType['dateTo'];
    constructor(id: CreateCompetitionType['id'], name: CreateCompetitionType['name'], category: CreateCompetitionType['category'], teams: CreateCompetitionType['teams'], dateFrom: CreateCompetitionType['dateFrom'], dateTo: CreateCompetitionType['dateTo']);
    static with({ id, name, category, teams, dateFrom, dateTo }: CreateCompetitionType): CreateCompetition;
}
export {};
