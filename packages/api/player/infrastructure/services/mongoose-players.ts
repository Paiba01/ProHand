import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Player from '~/player/domain/models/player';
import Players from '~/player/domain/services/player';
import { PlayerSchema } from '../models/mongoose/schema';
import { err, ok, Result } from 'neverthrow';
import { NotFoundPlayer } from '~/player/domain/exceptions/not-found';
import PlayerId from '~/player/domain/models/id';
import UserId from '~/user/domain/models/id';
import GameId from '~/game/domain/models/id';
import AthleteId from '~/athlete/domain/models/id';

export class MongoosePlayers implements Players {
  constructor(
    @InjectModel(PlayerSchema.name)
    private readonly players: Model<PlayerSchema>,
  ) {}

  async find(id: PlayerId): Promise<Result<Player, NotFoundPlayer>> {
    const match = await this.players.findById(id.value).exec();

    if (!match) return err(NotFoundPlayer.withId(id.value));

    const playerIdResult = PlayerId.fromString(match._id);
    if (playerIdResult.isErr()) return err(NotFoundPlayer.withId(id.value));

    const userIdResult = UserId.fromString(match.userId);
    if (userIdResult.isErr()) return err(NotFoundPlayer.withId(id.value));

    const gameIdResult = GameId.fromString(match.gameId);
    if (gameIdResult.isErr()) return err(NotFoundPlayer.withId(id.value));

    const athletesIds = match.athletesIds
      .map(id => AthleteId.fromString(id))
      .filter(result => result.isOk())
      .map(result => result.value);

    return ok(
      Player.create({
        id: playerIdResult.value,
        userId: userIdResult.value,
        gameId: gameIdResult.value,
        cash: match.cash,
        athletesIds,
      }),
    );
  }

  async update(player: Player): Promise<void> {
    await this.players
      .updateOne(
        { _id: player.id.value },
        {
          cash: player.cash,
          athletesIds: player.athletesIds.map((id) => id.value),
        },
      )
      .lean()
      .exec();
  }
}
