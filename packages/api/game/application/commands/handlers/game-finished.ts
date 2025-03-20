import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'
import { Result, err, ok } from 'neverthrow'
import InvalidGameId from '~/game/domain/exceptions/invalid-game-id'
import GameId from '~/game/domain/models/id'
import GameRepository from '~/game/domain/services/game-repository'
import Game from '~/game/domain/models/game'
import { FinishGame } from '../game-finished'

@CommandHandler(FinishGame)
export class GameFinishedHandler implements ICommandHandler<FinishGame> {
  constructor(@Inject(GameRepository) private readonly gameRepository: GameRepository) {}

  async execute(command: FinishGame): Promise<Result<void, InvalidGameId>> {
    // Validar el GameId
    const gameId = GameId.fromString(command.gameId)
    if (gameId.isErr()) return err(gameId.error)

    // Buscar la partida en el repositorio
    const game = await this.gameRepository.findById(gameId.value)
    if (!game) return err(new InvalidGameId('Game not found'))

    // Finalizar la partida
    game.finishGame()

    // Guardar el estado final de la partida
    await this.gameRepository.save(game)

    return ok(undefined)
  }
}
