import { Component, OnInit } from '@angular/core';
import { Apoo } from 'src/app/shared/model/apoo';

@Component({
  selector: 'ih-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appod: Apoo;

  constructor() { }

  ngOnInit() {
    this.appod = {
      title : 'NGC 2261: Hubble´s Variable Nebula',
      date: '2018-05-23',
      explanation: 'lorem lorem lorem',
      hdurl: 'lorem lorem lorem',
      media_type: 'image',
      service_version: 'v1',
      url: 'https://i.ytimg.com/vi/3yHOHwDi94Y/hqdefault.jpg'
    };
  }

}
