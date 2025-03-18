import Match from '~/match/domain/models/match';
export declare class MatchSchema {
    readonly _id: string;
    readonly competitionId: string;
    readonly local: string;
    readonly visitor: string;
    readonly referee1?: string;
    readonly referee2?: string;
    readonly day: Date;
    constructor(_id: MatchSchema['_id'], competitionId: MatchSchema['competitionId'], local: MatchSchema['local'], visitor: MatchSchema['visitor'], referee1: MatchSchema['referee1'], referee2: MatchSchema['referee2'], day: MatchSchema['day']);
    static fromMatch({ id, competitionId, local, visitor, referee1, referee2, day }: Match): MatchSchema;
}
