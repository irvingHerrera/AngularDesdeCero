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

  readonly DEFAULT_PICTURE: string = 'http://cdn.osxdaily.com/wp-content/uploads/2015/08/twitter-ios-icon.jpg';

  constructor() { }

  ngOnInit() {
    this.estudiante1 = new ClassEstudiante(1,
                                          'Luis Aviles',
                                          'Cochabamba',
                                          );

    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      cuidad: 'Lima',
      fotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSc5D4_UK0Vyj_p-yBtJ2dD83GBPTordB9lZKf2nZVhhR0Deoh'
    };
      console.log("edad", this.estudiante1.getEdad());
    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      cuidad: 'Bogota',
      fotoURL: 'https://orig00.deviantart.net/f5aa/f/2016/199/7/6/profile_picture_by_random_explosion-daag6xh.png'
    };

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Irving Herrera',
        cuidad: 'Tuxtla',
        fotoURL: 'https://orig00.deviantart.net/f5aa/f/2016/199/7/6/profile_picture_by_random_explosion-daag6xh.png'
      }
    }, 3000);


  }

}
