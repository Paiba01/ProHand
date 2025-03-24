import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags
} from '@nestjs/swagger'
import { CreateUser } from '~/user/application/commands/create-user'
import { CreateUserHandler } from '~/user/application/commands/handlers/create-user'
import { CreateUserDto } from '~/user/dto/request/create-user'
import HttpError from '~/shared/http/error'
  
  @ApiTags('Players')
  @Controller('players')
  export class PlayersController {
    constructor(
      private readonly commandBus: CommandBus,
      private readonly queryBus: QueryBus,
    ) {}

    @ApiOperation({ summary: 'Updates a player' })
    @ApiCreatedResponse({
      description: 'Player updated',
    })
    @ApiBadRequestResponse({ description: 'Invalid input' })
    @Post()
    async createUser(@Body() dto: CreateUserDto) {
      const response: Awaited<ReturnType<CreateUserHandler['execute']>> =
        await this.commandBus.execute(
          CreateUser.with({
            id: dto.id,
            name: dto.name,
            email: dto.email,
            password: dto.password,
          }),
        )
  
      if (response.isErr())
        throw new BadRequestException(HttpError.fromException(response.error))
    } 



}
  