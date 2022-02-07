import {
  Controller,
  ParseIntPipe,
  Get,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAll() {
    //return 'Get all players';
    return this.playerService.getPlayers();
  }

  @Get(':id')
  getPlayer(@Param('id', ParseIntPipe) id: Player) {
    return this.playerService.getPlayer(id);
  }

  @Post()
  createPlayer(@Body() player) {
    //return player;
    //return `Crear un jugador: ${player.name} Juega de ${player.position}`;
    return this.playerService.createPlayer(player);
  }
}
