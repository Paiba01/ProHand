import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import PlayerJoinedGameEvent from '~/game/domain/events/PlayerJoinedGameEvent'


@EventsHandler(PlayerJoinedGameEvent)
export class PlayerJoinedGameEventHandler implements IEventHandler<PlayerJoinedGameEvent> {
  handle(event: PlayerJoinedGameEvent) {
    console.log(`📢 Player ${event.player} joined Game ${event.gameId}`)

    // Aquí podrías hacer otras acciones como:
    // - Notificar por WebSockets
    // - Enviar un correo al jugador
    // - Guardar en una tabla de logs
  }
}
