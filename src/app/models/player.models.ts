import { Song } from './song.models';

export interface IPlayer {
  currentSong: Song | undefined;
  currentProgressbarValue: number;
  songs: Song[];
}
