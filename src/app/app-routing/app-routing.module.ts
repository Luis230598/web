import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from '../listado/listado.component';
import { EmpleadoComponent } from '../empleado/empleado.component';


const routes : Routes = [
  {
    path:'empleado',
    component:EmpleadoComponent
  },
  
  {
    path:'listado',
    component:ListadoComponent
  }
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
