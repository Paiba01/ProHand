type EditCompetitionType = {
    id: string;
    name: string;
    category: string;
    dateFrom: string;
    dateTo: string;
};
export declare class EditCompetition implements EditCompetitionType {
    readonly id: EditCompetitionType['id'];
    readonly name: EditCompetitionType['name'];
    readonly category: EditCompetitionType['category'];
    readonly dateFrom: EditCompetitionType['dateFrom'];
    readonly dateTo: EditCompetitionType['dateTo'];
    private constructor();
    static with({ id, name, category, dateFrom, dateTo }: EditCompetitionType): EditCompetition;
}
export {};
