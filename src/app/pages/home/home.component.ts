import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public browserAll = [
    {
      bgColor: 'red',
      color: 'white',
      title: 'Podcasts',
    },
    { bgColor: 'green', color: 'white', title: 'Made for you' },
    { bgColor: 'purple', color: 'white', title: 'Charts' },
    { bgColor: 'blue', color: 'white', title: 'Live streams' },
    { bgColor: 'pink', color: 'white', title: 'Bollywood' },
    { bgColor: 'lightblue', color: 'white', title: 'Punjabi' },
    { bgColor: 'orange', color: 'white', title: 'Tamil' },
    { bgColor: 'yellow', color: 'white', title: 'Telugu' },
    { bgColor: 'black', color: 'white', title: 'Marathi' },
    { bgColor: 'orangered', color: 'white', title: 'Hip-Hop' },
    { bgColor: 'darkgray', color: 'white', title: 'Workout' },
    { bgColor: 'smokewhite', color: 'white', title: 'R&B' },
  ];
  public songCards = [
    {
      song_id: 1,
      thumbnail:
        'assets/image/orepiya.jpg',
      title: 'O Re Piya',
      description: 'Singer-Rahat Fateh Ali Khan',
      song_link: 'assets/songs/O Re Piya-.m4a',
      
    },
    {
      song_id: 2,
      thumbnail:
        'assets/image/peace.jpg',
      title: 'Peaceful Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/songs/Melancholia-.m4a',
    },
    {
      song_id: 3,
      thumbnail:
        'assets/image/dj.jpg',
      title: 'Bhool Bhulaiyaa',
      description: 'Singer- Neeraj Shridhar',
      song_link: 'assets/songs/Bhool Bhulaiyaa-.m4a',
    },
    {
      song_id: 4,
      thumbnail:
        'assets/image/party.jpg',
      title: 'Badtameez Dil',
      description: 'Singer-Benny Dayal and Shefali Alvares',
      song_link: 'assets/songs/Dailamo-Dailamo.mp3',
    },
    {
      song_id: 5,
      thumbnail:
        'assets/image/galliyan.jpg',
      title: 'Galliyan (Unplugged)',
      description: 'Singer- Ankit Tiwari, Shraddha Kapoor',
      song_link: 'assets/songs/Galliyan (Unplugged).mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'assets/image/MV5BY2QwMzZjN2MtYjk0My00OThhLWFmNjAtZTFkM2NkNTkwYTFlXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
      title: 'Om Shanti Om',
      description: 'Singer-KK, Sukhwinder Singh, Marianne',
      song_link: 'assets/songs/10  Om Shanti Om - Medley Mix - www.downloadming.com.mp3',
    },
    {
      song_id: 7,
      thumbnail:
        'assets/image/30796_4.jpg',
      title: 'Hawa-Hawa-Dj-Remix',
      description: 'Singer-Hassan Jahangir',
      song_link: 'assets/songs/Hawa-Hawa-Dj-Remix(MrSong.In).mp3',
    },
    
  ];

  public songCards1 = [
    {
      song_id: 1,
      thumbnail:
        'assets/image/Aayiram-Kannulla-Malakha.jpg',
      title: 'Aayiram Kannulla Malakha',
      description: 'Singer-Hafiz Suip',
      song_link: 'assets/songs/Aayiram-Kannulla-Malakha.mp3',
      
    },
    {
      song_id: 2,
      thumbnail:
        'assets/image/2242532.jpg',
      title: 'Mazhaye Mazhaye',
      description: 'Singer-Karthik and Abhaya Hiranmayi',
      song_link: 'assets/songs/Mazhaye-Mazhaye-Karthik-Abhaya-Hiranmayi.mp3',
    },
    {
      song_id: 3,
      thumbnail:
        'assets/image/oru murai vanth parthayo.jpg',
      title: 'Oru Murai Vanthu',
      description: 'Singer-K S Chithra and K.J. Yesudas',
      song_link: 'assets/songs/Oru-Murai-Vanthu.mp3',
    },
    {
      song_id: 4,
      thumbnail:
        'assets/image/Mandhara-Cheppundo.mp3',
      title: 'Mandhara Cheppundo',
      description: 'Singer-KS Chithra, MG Sreekumar ',
      song_link: 'assets/songs/Mandhara-Cheppundo.mp3',
    },
    {
      song_id: 5,
      thumbnail:
        'assets/image/oru poo mathram.jpg',
      title: 'oru poo mathram',
      description: 'Singer-Sujatha Mohan',
      song_link: 'assets/songs/oru poo mathram.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'assets/image/Manikkinavin Kothumbuvallam.jpg',
      title: 'Mandhara Cheppundo',
      description: 'Singer-KJ Yesudas, Sujatha Mohan ',
      song_link: 'assets/songs/Manikkinavin Kothumbuvallam.mp3',
    },
    {
      song_id: 7,
      thumbnail:
        'assets/image/pookalam vannu.jpg',
      title: 'Mandhara Cheppundo',
      description: 'Singer-KS Chithra ',
      song_link: 'assets/songs/Pookalam Vannu.mp3',
    },
    
  ];

  public songCards2 = [
    {
      song_id: 1,
      thumbnail:
        'assets/image/ne partha vizhigal.jpg',
      title: 'ne partha vizhigal',
      description: 'Singer-Vijay Yesudas & Shweta Mohan',
      song_link: 'assets/songs/Nee-Partha.mp3',
      
    },
    {
      song_id: 2,
      thumbnail:
        'assets/image/kanave kanave.jpg',
      title: 'kanave kanave',
      description: 'Singer-Anirudh Ravichander',
      song_link: 'assets/songs/Kanave-Kanave-MassTamilan.com.mp3',
    },
    {
      song_id: 3,
      thumbnail:
        'assets/image/thanga-meenkal1.jpg',
      title: 'Anandha Yazhai',
      description: 'Singer- Sriram Parthasarathy',
      song_link: 'assets/songs/Aanandha-Yazhai.mp3',
    },
    {
      song_id: 4,
      thumbnail:
        'assets/image/kannkal.jpg',
      title: 'Kangal-Irandal',
      description: 'Singer-Bellie Raj & Deepa Mariam',
      song_link: 'assets/songs/Kangal-Irandal.mp3',
    },
    {
      song_id: 5,
      thumbnail:
        'assets/image/Vaseegara.jpg',
      title: 'Vaseegara',
      description: 'Singer-Jonita Gandhi',
      song_link: 'assets/songs/Vaseegara.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'assets/image/kokkara kokkara ko.jpg',
      title: 'kokkara kokkara ko',
      description: 'Singer-Udit Narayan & Sujatha',
      song_link: 'assets/songs/Kokkarakko.mp3',
    },
    {
      song_id: 7,
      thumbnail:
        'assets/image/Nenjukkul Peidhidum.jpg',
      title: 'Nenjukkul Peidhidum',
      description: 'Singer-Hariharan, Devan Ekambaram & V.V. Prassanna',
      song_link: 'assets/songs/Nenjukkul Peidhidum.mp3',
    },
  ];
  constructor(public sb: SearchBarService) {}

  ngOnInit(): void {}

  onInputFilterRes($event: string) {
    const res = this.browserAll.filter(
      (element) => element.title.toLowerCase() === $event.toLowerCase().trim()
    );
    console.log(res);
  }

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }
}
