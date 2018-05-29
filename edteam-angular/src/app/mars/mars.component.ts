import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/service/nasa-api.service';

@Component({
  selector: 'ih-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages:MarsImage[];
  camaras: string[] = ['MAST','CHEMCAM','NAVCAM'];

  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.servicio.getMarsImages('CHEMCAM').subscribe(data => {
      this.marsImages = data.photos;
    });
  }

}
