import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/player.models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  player$: Observable<IPlayer>;

  constructor(public playerService: PlayerService){
    this.player$ = this.playerService.getPlayer$();
  }
}
