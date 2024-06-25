import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  

  public songData!: any;
  songCards: any;
  isPlaying: boolean;
  constructor(
    private sd: SongDataService,
    private route: Router,
    private acivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acivatedRoute.params
      .pipe(map((d) => window.history.state))
      .subscribe((data) => (this.songData = data)
        
      );
    if (this.songData?.link === '') {
      this.route.navigate(['/']);
      window.alert(
        `No Song Available For Selected Album with ${this.songData.id}`
      );
    }
    // this.sd.songData.subscribe((data) => {
    //   this.songData = data;
    //   console.log(data);
    // });
  }
  playPreviousSong() {
    // Decrement current song index
    this.songData.id--;

    // If index is less than 0, set it to the last song index
    if (this.songData.id < 0) {
      this.songData.id = this.songCards.length - 1;
    }

    // Here you would implement logic to play the song at this.songs[this.currentSongIndex].url
    console.log('Playing previous song:', this.songCards[this.songData.id ].name);
    console.log('Song URL:', this.songCards[this.songData.id ].url);
  }


  playPause() {
    if (this.isPlaying) {
      // Pause the audio
      this.pauseAudio();
    } else {
      // Play the audio
      this.playAudio();
    }
  }

  playAudio() {
    // Implement logic to play the audio
    console.log('Audio played');
    this.isPlaying = true;
  }

  pauseAudio() {
    // Implement logic to pause the audio
    console.log('Audio paused');
    this.isPlaying = false;
  }

  playNextSong() {
    // Increment current song index
    this.songData.id ++;

    // If index exceeds the number of songs, loop back to the first song
    if (this.songData.id  >= this.songCards.length) {
      this.songData.id  = 0;
    }

    // Here you would implement logic to play the song at this.songs[this.currentSongIndex].url
    console.log('Playing next song:', this.songCards[this.songData.id ].name);
    console.log('Song URL:', this.songCards[this.songData.id ].url);
  }

}

