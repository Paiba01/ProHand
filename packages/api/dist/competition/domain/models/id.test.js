"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const id_1 = require("./id");
describe('CompetitionId', () => {
    it.concurrent('can be created from string', () => {
        const value = '85fe13bf-5e0f-47e4-be24-21b94e9048e1';
        const id = id_1.CompetitionId.fromString(value);
        expect(id).toBeInstanceOf(neverthrow_1.Ok);
    });
    it.concurrent('cannot be blank', () => {
        expect(id_1.CompetitionId.fromString(' ')).toBeInstanceOf(neverthrow_1.Err);
    });
    it.concurrent('cannot have invalid format', () => {
        expect(id_1.CompetitionId.fromString('notValidUuidFormat')).toBeInstanceOf(neverthrow_1.Err);
    });
});
//# sourceMappingURL=id.test.js.map