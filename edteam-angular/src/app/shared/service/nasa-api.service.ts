import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Apoo } from '../model/apoo';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod'
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY = 'SGZpVMsqUerNeTyeVW6zERJDBVMtHkYOQhBSLW5R';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private httpClient: HttpClient) { }

  getApoo(): Observable<Apoo>{
    return this.httpClient.get<Apoo>(`${APOD_URL}?api_key=${API_KEY}`);
  }

  getMarsImages(camera: string):Observable<any>{
    return this.httpClient.get(`${MARS_URL}&camara=${camera}&api_key=${API_KEY}`);
  }
}
