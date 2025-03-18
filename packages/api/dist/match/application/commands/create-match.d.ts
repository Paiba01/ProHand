type CreateMatchType = {
    id: string;
    local: string;
    visitor: string;
    day: string;
};
export declare class CreateMatch implements CreateMatchType {
    readonly id: CreateMatchType['id'];
    readonly local: CreateMatchType['local'];
    readonly visitor: CreateMatchType['visitor'];
    readonly day: CreateMatchType['day'];
    constructor(id: CreateMatchType['id'], local: CreateMatchType['local'], visitor: CreateMatchType['visitor'], day: CreateMatchType['day']);
    static with({ id, local, visitor, day }: CreateMatchType): CreateMatch;
}
export {};
