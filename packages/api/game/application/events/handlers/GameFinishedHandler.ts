import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import GameFinishedEvent from '~/game/domain/events/GameFinishedEvent'


@EventsHandler(GameFinishedEvent)
export class GameFinishedEventHandler implements IEventHandler<GameFinishedEvent> {
  handle(event: GameFinishedEvent) {
    console.log(`🏁 Game ${event.gameId} has finished!`)

    // Aquí podrías hacer acciones como:
    // - Enviar notificaciones a los jugadores
    // - Actualizar estadísticas en la base de datos
    // - Desencadenar procesos de recompensas o clasificaciones
  }
}
