import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HeaderComponent } from './player/header/header.component';
import { SongImageComponent } from './player/song-image/song-image.component';
import { ActionsComponent } from './player/actions/actions.component';
import { SongListComponent } from './player/song-list/song-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
