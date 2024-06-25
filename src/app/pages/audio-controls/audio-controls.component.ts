// audio-controls.component.ts
import { Component } from '@angular/core';

interface Song {
  name: string;
  url: string;
}

@Component({
  selector: 'app-audio-controls',
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.css']
})
export class AudioControlsComponent {

  // Assume you have a list of songs with names and URLs
  songs: Song[] = [
    { name: 'Song 1', url: 'assets/songs/O Re Piya-.m4a' },
    { name: 'Song 2', url: 'assets/songs/Melancholia-.m4a' },
    { name: 'Song 3', url: 'assets/songs/Bhool Bhulaiyaa-.m4a' }
  ];
  currentSongIndex: number = 0; // Initialize with the first song
  isPlaying: boolean = false;
  constructor() { }

  playPreviousSong() {
    // Decrement current song index
    this.currentSongIndex--;

    // If index is less than 0, set it to the last song index
    if (this.currentSongIndex < 0) {
      this.currentSongIndex = this.songs.length - 1;
    }

    // Here you would implement logic to play the song at this.songs[this.currentSongIndex].url
    console.log('Playing previous song:', this.songs[this.currentSongIndex].name);
    console.log('Song URL:', this.songs[this.currentSongIndex].url);
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
    this.currentSongIndex++;

    // If index exceeds the number of songs, loop back to the first song
    if (this.currentSongIndex >= this.songs.length) {
      this.currentSongIndex = 0;
    }

    // Here you would implement logic to play the song at this.songs[this.currentSongIndex].url
    console.log('Playing next song:', this.songs[this.currentSongIndex].name);
    console.log('Song URL:', this.songs[this.currentSongIndex].url);
  }

  // Other functions like playPreviousSong() and playPause() go here

}
