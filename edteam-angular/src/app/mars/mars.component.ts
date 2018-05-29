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
  currentCamera: string;

  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = this.camaras[0];
    this.refreshView('MAST');
  }

  onSelectCamera(camera: string){
    this.refreshView(camera);
  }

  private refreshView(camera: string){
    console.log('camera', camera);
    this.servicio.getMarsImages(camera).subscribe(data => {
      console.log("data", data);
      this.marsImages = [];
      this.marsImages = data.photos;
    });
  }

}
