import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Music } from './music';

@Injectable()
export class MusicService {
  private musicsUrl = 'app/musics';  // URL to web api

  constructor(private http: Http) { }

  getMusics(): Promise<Music[]> {
    return this.http
      .get(this.musicsUrl)
      .toPromise()
      .then(response => response.json().data as Music[])
      .catch(this.handlerror);
  }

  getMusic(id: number): Promise<Music> {
    return this.getMusics()
      .then(musics => musics.find(music => music.id === id));
  }

  save(music: Music): Promise<Music> {
    if (music.id) {
      return this.put(music);
    }
    return this.post(music);
  }

  delete(music: Music): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.musicsUrl}/${music.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handlerror);
  }

  // Add new music
  private post(music: Music): Promise<Music> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.musicsUrl, JSON.stringify(music), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handlerror);
  }

  // Update existing music
  private put(music: Music): Promise<Music> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.musicsUrl}/${music.id}`;

    return this.http
      .put(url, JSON.stringify(music), { headers: headers })
      .toPromise()
      .then(() => music)
      .catch(this.handleError);
  }

  private handlerror(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
