import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/player.models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-song-image',
  templateUrl: './song-image.component.html',
  styleUrls: ['./song-image.component.scss'],
})
export class SongImageComponent {
  player$: Observable<IPlayer>;
  duration: number = 0;

  constructor(public playerService: PlayerService) {
    this.player$ = this.playerService.getPlayer$();
    this.playerService.getPlayer$().subscribe((res: any) => {
      this.duration = res.currentSong.duration;
    });
    this.playerService.startTimer(0);
  }
}
