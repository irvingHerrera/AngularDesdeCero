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
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {
    this.appod = this.nasaApi.getApoo();
  }

}
