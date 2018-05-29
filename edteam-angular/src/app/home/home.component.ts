import { Component, OnInit } from '@angular/core';
import { Apoo } from 'src/app/shared/model/apoo';
import { NasaApiService } from '../shared/service/nasa-api.service';

@Component({
  selector: 'ih-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appod: Apoo;
  error: string;
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {
    this.nasaApi.getApoo()
    .subscribe((data: Apoo) => {
      //setTimeout(() => {
        this.appod = data;
      //}, 1500);
    }, error => {
      console.log('Error al conectar con el servidor');
      this.error = 'Error al conectar con el servidor';
    });
  }

}
