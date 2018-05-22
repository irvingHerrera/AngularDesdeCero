import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'ih-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    this.estudiante1 = {
      id: 1,
      nombre: 'Luis Aviles',
      cuidad: 'Cochabamba',
      fotoURL: 'https://i2.wp.com/ausdroid.net/wp-content/uploads/2017/05/contacts.png?resize=300%2C300'
    };

    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      cuidad: 'Lima'
    };
      
    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      cuidad: 'Bogota'
    };

  }

}
