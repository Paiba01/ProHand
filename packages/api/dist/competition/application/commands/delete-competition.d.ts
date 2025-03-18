type DeleteCompetitionType = Readonly<{
    id: string;
}>;
export declare class DeleteCompetition implements DeleteCompetitionType {
    readonly id: DeleteCompetitionType['id'];
    private constructor();
    static with({ id }: DeleteCompetitionType): DeleteCompetition;
}
export {};
