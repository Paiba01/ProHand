import { Result } from 'neverthrow';
import PlayerId from '../models/id';
import Player from '../models/player';
import { NotFoundPlayer } from '../exceptions/not-found';

type Players = {
    find(id: PlayerId): Promise<Result<Player, NotFoundPlayer>>; 
    update(player: Player): Promise<void>;
}

const Players = 'Players';

export default Players;
