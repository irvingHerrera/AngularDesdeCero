import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Apoo } from '../model/apoo';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'SGZpVMsqUerNeTyeVW6zERJDBVMtHkYOQhBSLW5R';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private httpClient: HttpClient) { }

  getApoo(): Observable<Apoo>{
    //return this.DATA;
    return this.httpClient.get<Apoo>(`${APOD_URL}?api_key=${API_KEY}`);
  }

}
