import { Injectable } from '@angular/core';
import { DemoSongs, Song } from '../models/song.models';
import { BehaviorSubject } from 'rxjs';
import { IPlayer } from '../models/player.models';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private currentSong: Song | undefined;
  private songs: Song[] = DemoSongs;
  private player$: BehaviorSubject<IPlayer>;

  constructor() {
    if (this.songs.length) {
      this.currentSong = this.songs[0];
    }

    this.player$ = new BehaviorSubject({
      currentSong: this.currentSong,
      songs: this.songs,
    });
  }
}
