import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Empelado } from 'src/app/interface/empleado';


@Component({
  selector: 'contenido-com',
  templateUrl:'./empleado.component.html',
  styleUrls: ['./empleado.component.css']
})



export class contenidoComponent{
  formulario = this.nuevoFormualario.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:''
  });




  CHILLSAVE(){

          let nuevoUser : Empelado = {
              nombre :this.formulario.get('nombre')?.value,
              apellido:this.formulario.get('apellido')?.value,
              email:this.formulario.get('email')?.value,
              telefono:this.formulario.get('telefono')?.value, 
          }
          this.UserService.addUser(nuevoUser);

          console.log(this.usuarios);
          this.limpiarForm();
  }


  limpiarForm(){
          this.formulario.reset()
      }

}