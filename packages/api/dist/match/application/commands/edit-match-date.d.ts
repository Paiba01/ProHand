type EditMatchDateType = {
    id: string;
    day: string;
};
export declare class EditMatchDate implements EditMatchDateType {
    readonly id: EditMatchDateType['id'];
    readonly day: EditMatchDateType['day'];
    private constructor();
    static with({ id, day }: EditMatchDateType): EditMatchDate;
}
export {};
