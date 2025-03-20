import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'
import { Result, err, ok } from 'neverthrow'

import InvalidGameId from '~/game/domain/exceptions/invalid-game-id'
import InvalidPlayerId from '~/player/domain/exceptions/invalid-player-id'
import GameId from '~/game/domain/models/id'
import PlayerId from '~/player/domain/models/id'
import GameRepository from '~/game/domain/services/game-repository'
import PlayerRepository from '~/player/domain/services/player-repository'
import Game from '~/game/domain/models/game'
import Player from '~/player/domain/models/player'
import { JoinGame } from '../join-game'

@CommandHandler(JoinGame)
export class JoinGameHandler implements ICommandHandler {
  constructor(
    @Inject(GameRepository) private readonly gameRepository: GameRepository,
    @Inject(PlayerRepository) private readonly playerRepository: PlayerRepository
  ) {}

  async execute(command: JoinGame): Promise<Result<void, InvalidGameId | InvalidPlayerId>> {
    // Validar el GameId
    const gameId = GameId.fromString(command.gameId)
    if (gameId.isErr()) return err(gameId.error)

    // Validar el PlayerId
    const playerId = PlayerId.fromString(command.playerId)
    if (playerId.isErr()) return err(playerId.error)

    // Buscar el juego en el repositorio
    const game = await this.gameRepository.findById(gameId.value)
    if (!game) return err(new InvalidGameId('Game not found'))

    // Buscar el jugador en el repositorio
    const player = await this.playerRepository.findById(playerId.value)
    if (!player) return err(new InvalidPlayerId('Player not found'))

    // Agregar el jugador a la partida
    game.addPlayer(player)

    // Guardar la partida con el nuevo jugador
    await this.gameRepository.save(game)

    return ok(undefined)
  }
}
