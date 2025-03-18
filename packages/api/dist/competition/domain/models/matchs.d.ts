import { Result } from 'neverthrow';
import { ValueObject } from '~/shared/domain';
import { InvalidMatchs } from '../exceptions/invalid-matchs';
import Match from '~/match/domain/models/match';
export declare class Matchs extends ValueObject<Match[]> {
    private constructor();
    static fromArray(value: Match[]): Result<Matchs, InvalidMatchs>;
    get matches(): ReadonlyArray<Match>;
    get count(): number;
}
