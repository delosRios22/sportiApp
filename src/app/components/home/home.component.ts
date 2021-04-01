import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  errorServicio: boolean;
  messageError: string;
  constructor(private http: HttpClient, private spoty: SpotifyService) {
    this.loading = true;
    this.errorServicio = false;
    this.spoty.getNewReleases().subscribe((data: any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    },(error) => {
      this.loading = false;
      this.errorServicio = true;
      this.messageError = error.error.error.message;
    });
   }
 
 

}
