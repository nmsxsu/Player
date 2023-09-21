interface ISong {
  id: number;
  image: string;
  album: string;
  duration: string;
  song: string;
  artist: string;
}

export class Song implements ISong {
  id: number;
  image: string;
  album: string;
  duration: string;
  song: string;
  artist: string;

  constructor(s:ISong){
    this.id = s.id
    this.image = s.image
    this.album = s.album
    this.duration = s.duration
    this.song = s.song
    this.artist = s.artist
  }
}


export const DemoSongs: Song[] = [
    {id:1,image:"https://f4.bcbits.com/img/a1689717237_10.jpg",album:'Drunk',duration:'3:15',song:'Funny Thing',artist:'Thundercat'},
    {id:2,image:"https://f4.bcbits.com/img/a4058062868_16.jpg",album:'Drunk',duration:'3:45',song:'Lava Lamp',artist:'Thundercat'},
    {id:3,image:"https://f4.bcbits.com/img/a1310699089_16.jpg",album:'Dragonball Durag',duration:'2:55',song:'Dragonball Durag',artist:'Thundercat'},
    {id:4,image:"https://media.timeout.com/images/101622693/image.jpg",album:'Multiply',duration:'3:34',song:'Thinking Out Loud',artist:'Ed Sheeran'},
    {id:5,image:"https://m.media-amazon.com/images/I/B1HYJn9MrPS._UF1000,1000_QL80_.jpg",album:'Divide',duration:'3:15',song:'Dive',artist:'Ed Sheeran'},
]