import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { ActionsComponent } from './actions/actions.component';
import { HeaderComponent } from './header/header.component';
import { SongImageComponent } from './song-image/song-image.component';
import { SongListComponent } from './song-list/song-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PlayerComponent,
    ActionsComponent,
    HeaderComponent,
    SongImageComponent,
    SongListComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
