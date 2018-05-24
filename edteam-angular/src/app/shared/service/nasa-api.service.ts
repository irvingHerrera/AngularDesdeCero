import { Injectable } from '@angular/core';
import { Apoo } from '../model/apoo';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

    private readonly DATA: Apoo = {
      title : 'NGC 2261: Hubble´s Variable Nebula',
      date: '2018-05-23',
      explanation: 'lorem lorem lorem',
      hdurl: 'lorem lorem lorem',
      media_type: 'image',
      service_version: 'v1', 
      url: 'https://i.ytimg.com/vi/3yHOHwDi94Y/hqdefault.jpg'
    };

  constructor() { }

  getApoo(): Apoo{
    return this.DATA;
  }

}
