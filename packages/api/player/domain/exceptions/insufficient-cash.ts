import { Exception } from "~/shared/domain";

export class InsufficientCash extends Exception {
    static forPlayer(playerId: string, price: number): InsufficientCash {
        return new InsufficientCash(`Player with id ${playerId} does not have enough cash to buy an athlete costing ${price}`);
    }
}
