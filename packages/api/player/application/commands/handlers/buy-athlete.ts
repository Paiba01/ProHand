import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { err, ok, Result } from "neverthrow";
import { InvalidId } from "~/shared/domain";


import PlayerId from "~/player/domain/models/id";
import AthleteId from "~/athlete/domain/models/id";
import { BuyAthlete } from "../buy-athlete";
import Players from "~/player/domain/services/player";
import { NotFoundPlayer } from "~/player/domain/exceptions/not-found";
import { InsufficientCash } from "~/player/domain/exceptions/insufficient-cash";
import Athletes from "~/athlete/domain/services/athlete";
import { NotFoundAthlete } from "~/athlete/domain/exceptions/not-found";

@CommandHandler(BuyAthlete)
export class BuyAthleteHandler implements ICommandHandler {
    constructor(
        @Inject(Players) private readonly players: Players,
        @Inject(Athletes) private readonly athletes: Athletes
    ) {}

    async execute(
        command: BuyAthlete
    ): Promise<Result<void, InvalidId | NotFoundPlayer | NotFoundAthlete | InsufficientCash>> {
        const playerId = PlayerId.fromString(command.playerId);
        if (playerId.isErr()) return err(playerId.error);

        const athleteId = AthleteId.fromString(command.athleteId);
        if (athleteId.isErr()) return err(athleteId.error);

        const player = await this.players.find(playerId.value);
        if (player.isErr()) return err(player.error);

        const athlete = await this.athletes.find(athleteId.value);
        if (athlete.isErr()) return err(athlete.error);

        // Verificar si el usuario tiene suficiente dinero para comprar al atleta
        if (player.value.cash < athlete.value.price) {
            return err(InsufficientCash.forPlayer(player.value.id.toString(), athlete.value.price));
        }

        // Realizar la compra
        player.value.decreaseCash(athlete.value.price);
        player.value.addAthlete(athleteId.value);

        return ok(await this.players.update(player.value));

    }
}
