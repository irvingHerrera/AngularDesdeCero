import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ih-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario ={
    nombre:"irving"
  };

  placeholder = {
    nombre: "Nombre" 
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = "Jose";
      this.placeholder.nombre = "Apellido";
    }, 3000)
  }

  onKeyUp($event){
  console.log("input", $event)
  }

  onBlur($event: FocusEvent){
    console.log("onBlur", $event);
  }

}
