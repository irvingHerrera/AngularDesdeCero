import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'ih-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  @Input()
  estudiante: Estudiante;
  
  readonly DEFAULT_PICTURE: string = 'http://cdn.osxdaily.com/wp-content/uploads/2015/08/twitter-ios-icon.jpg';
  constructor() { }

  ngOnInit() {
  }

}
