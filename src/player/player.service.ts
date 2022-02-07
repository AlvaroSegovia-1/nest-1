import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Pelé',
      position: 'Delantero',
      Equipo: 'Santos',
      Edad: 24,
    },
    {
      id: 2,
      name: 'Maradona',
      position: 'Delantero',
      Equipo: 'Boca',
      Edad: 22,
    },
  ];

  getPlayers(): Player[] {
    return this.players;
  }
}
