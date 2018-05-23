import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ih-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario ={
    nombre:"irving"
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = "Jose";
    }, 3000)
  }

}
