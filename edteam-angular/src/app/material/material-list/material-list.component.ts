import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'ih-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    this.estudiante1 = new ClassEstudiante(1,
                                          'Luis Aviles',
                                          'Cochabamba',
                                          'https://i2.wp.com/ausdroid.net/wp-content/uploads/2017/05/contacts.png?resize=300%2C300');

    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      cuidad: 'Lima'
    };
      console.log("edad", this.estudiante1.getEdad());
    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      cuidad: 'Bogota'
    };

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Irving Herrera',
        cuidad: 'Tuxtla'
      }
    }, 3000);


  }

}
