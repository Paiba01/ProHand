type GetCompetitionType = Readonly<{
    id: string;
}>;
export declare class GetCompetition implements GetCompetitionType {
    readonly id: GetCompetitionType['id'];
    private constructor();
    static with({ id }: GetCompetitionType): GetCompetition;
}
export {};
