
import { Component, OnInit } from '@angular/core';

import { Empelado } from 'src/app/interface/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListadoComponent implements OnInit {

  users:Empelado[]=[];


  ngOnInit(): void {
    console.log(this.users;
  }

}

