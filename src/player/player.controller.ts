import { Controller, Get } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAll() {
    //return 'Get all players';
    return this.playerService.getPlayers();
  }
}
