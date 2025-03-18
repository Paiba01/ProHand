type GetMatchsByCompetitionType = Readonly<{
    competitionId: string;
}>;
export declare class GetMatchsByCompetition implements GetMatchsByCompetitionType {
    readonly competitionId: GetMatchsByCompetitionType['competitionId'];
    private constructor();
    static with({ competitionId }: GetMatchsByCompetitionType): GetMatchsByCompetition;
}
export {};
