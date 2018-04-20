import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Music } from './music';
import { MusicService } from './music.service';

@Component({
  moduleId: module.id,
  selector: 'my-music-detail',
  templateUrl: 'music-detail.component.html',
  styleUrls: ['music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  @Input() music: Music;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.musicService.getMusic(id)
            .then(music => this.music = music);
            console.log(this +" ngOnInit if")
      } else {
        this.navigated = false;
        this.music = new Music();
      }
    });
  }

  save(): void {
    this.musicService
        .save(this.music)
        .then(music => {
          this.music = music; // saved music, w/ id if new
          this.goBack(music);
          console.log(this)
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedMusic: Music = null): void {
    this.close.emit(savedMusic);
    if (this.navigated) { window.history.back(); }
  }
}
