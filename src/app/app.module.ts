import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HeaderComponent } from './player/header/header.component';
import { SongImageComponent } from './player/song-image/song-image.component';
import { ActionsComponent } from './player/actions/actions.component';
import { SongListComponent } from './player/song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HeaderComponent,
    SongImageComponent,
    ActionsComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
