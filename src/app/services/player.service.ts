import { Injectable } from '@angular/core';
import { DemoSongs, Song } from '../models/song.models';
import { BehaviorSubject, Observable } from 'rxjs';
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
  getPlayer$(): Observable<IPlayer> {
    return this.player$.asObservable();
  }

  private update() {
    this.player$.next({ currentSong: this.currentSong, songs: this.songs });
  }

  next(){
    if(this.songs.length && this.currentSong){
      const posizione = this.songs.indexOf(this.currentSong);
      const next = posizione < (this.songs.length-1) ? posizione+1 : 0;
      this.currentSong = this.songs[next];
      this.update();
    }else return;
  }

  prev(){
    if(this.songs.length && this.currentSong){
      const posizione = this.songs.indexOf(this.currentSong);
      const prev = posizione > 0 ? posizione-1 : (this.songs.length-1) ;
      this.currentSong = this.songs[prev];
      this.update();
    }else return;
  }
  
  setPicture(i:number){
    if(i <= (this.songs.length - 1)){
      this.currentSong = this.songs[i];
      this.update();
    }
  }
}
