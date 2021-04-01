import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http: HttpClient) {}


  getQuery( query: string){

    const url = (`https://api.spotify.com/v1/${query}`);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB00-wv4po6ipOJQk1WSWhB4sEUjKWpeJHhSSh4RZ7ZNT95oz20qYXtS3l6tw8tVCfAKTuQTYBcGFm40Zs'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));   
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
      // .pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
        .pipe(map(data => data['tracks']));
  }

}
