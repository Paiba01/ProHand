import { ValueObject } from '~/shared/domain';
declare class ScopeDescription extends ValueObject<string> {
    private constructor();
    static fromString(value: string): ScopeDescription;
}
export default ScopeDescription;
