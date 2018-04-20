import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Music } from './music';
import { MusicService } from './music.service';

@Component({
  moduleId: module.id,
  selector: 'my-musics',
  templateUrl: 'musics.component.html',
  styleUrls: ['musics.component.css']
})
export class MusicsComponent implements OnInit {
  musics: Music[];
  selectedMusic: Music;
  addingMusic = false;
  error: any;

  constructor(
    private router: Router,
    private musicService: MusicService) { }

  getMusics(): void {
    this.musicService
      .getMusics()
      .then(musics => this.musics = musics)
      .catch(error => this.error = error);
  }

  addMusic(): void {
    this.addingMusic = true;
    this.selectedMusic = null;

  }

  close(savedMusic: music): void {
    this.addingMusic = false;
    if (savedMusic) { this.getMusics(); }
  }

  deleteMusic(music: music, event: any): void {
    event.stopPropagation();
    this.musicService
      .delete(music)
      .then(res => {
        this.musics = this.musics.filter(h => h !== music);
        if (this.selectedMusic === music) { this.selectedMusic = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getMusics();
  }

  onSelect(music: Music): void {
    this.selectedMusic = music;
    this.addingMusic = false;
  }

  gotoMusics(): void {
    this.router.navigate(['/musics', this.selectedMusic.id]);
  }
}
