import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'ih-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE: string = 'http://cdn.osxdaily.com/wp-content/uploads/2015/08/twitter-ios-icon.jpg';

  @Input()
  estudiante: Estudiante;
  
  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante){
    this.onMouseClick.emit(e);
  }

}
