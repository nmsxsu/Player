import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/player.models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  player$: Observable<IPlayer>;

  constructor(public playerService: PlayerService){
    this.player$ = this.playerService.getPlayer$();
}
}
