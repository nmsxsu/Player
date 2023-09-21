import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/player.models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  player$: Observable<IPlayer>;

  constructor(public playerService: PlayerService){
    this.player$ = this.playerService.getPlayer$();
  }
}
