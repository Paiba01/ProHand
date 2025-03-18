import { AggregateRoot } from '@nestjs/cqrs';
import { MatchId } from './id';
import { Team } from './team';
import Referee from './referee';
import { CompetitionId } from '~/competition/domain/models/id';
declare class Match extends AggregateRoot {
    private readonly _id;
    private readonly _competitionId;
    private readonly _local;
    private readonly _visitor;
    private readonly _referee1;
    private readonly _referee2;
    private readonly _day;
    private constructor();
    static create({ id, competitionId, local, visitor, day, referee1, referee2, }: {
        id: MatchId;
        competitionId: CompetitionId;
        local: Team;
        visitor: Team;
        day: Date;
        referee1?: Referee | null;
        referee2?: Referee | null;
    }): Match;
    get id(): MatchId;
    get competitionId(): CompetitionId;
    get local(): Team;
    get visitor(): Team;
    get referee1(): Referee | null;
    get referee2(): Referee | null;
    get day(): Date;
}
export default Match;
