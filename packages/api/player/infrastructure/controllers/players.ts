import {
  BadRequestException,
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BuyAthlete } from '~/player/application/commands/buy-athlete';
import { BuyAthleteHandler } from '~/player/application/commands/handlers/buy-athlete';
import { BuyAthleteDto } from '~/player/dto/request/buy-athlete';
import HttpError from '~/shared/http/error';


@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Buy an athlete for a player' })
  @ApiCreatedResponse({ description: 'Athlete successfully purchased' })
  @ApiBadRequestResponse({ description: 'Invalid input or insufficient cash' })
  @Post('buy-athlete')
  async buyAthlete(@Body() dto: BuyAthleteDto) {
    const response: Awaited<ReturnType<BuyAthleteHandler['execute']>> =
      await this.commandBus.execute(
        BuyAthlete.with({
          playerId: dto.playerId, 
          athleteId: dto.athleteId,
        }),
      )

      if (response.isErr()) {
          throw new BadRequestException(HttpError.fromException(response.error));
      }
  }
}
