import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Player from '~/player/domain/models/player';
import Players from '~/player/domain/services/player';
import { PlayerSchema } from '../models/mongoose/schema';
import { err, ok, Result } from 'neverthrow';
import { NotFoundPlayer } from '~/player/domain/exceptions/not-found';
import PlayerId from '~/player/domain/models/id';

export class MongoosePlayers implements Players {
  constructor(
    @InjectModel(PlayerSchema.name)
    private readonly players: Model<PlayerSchema>,
  ) {}

  async find(id: PlayerId): Promise<Result<Player, NotFoundPlayer>> {
    const match = await this.players.findById(id.value).exec();

    if (!match) return err(NotFoundPlayer.withId(id.value));

    return ok(
        Player.create({
            id: PlayerId.fromString(match._id).value,
            userId: match.userId,
            gameId: match.gameId,
            cash: match.cash,
            athletesIds: match.athletesIds.map(id => AthleteId.fromString(id).value),
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
