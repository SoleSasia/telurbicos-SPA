import { Component, OnInit } from '@angular/core';
import { Mural } from 'src/app/models/mural';

@Component({
  selector: 'app-homenajes',
  templateUrl: './homenajes.component.html',
  styleUrls: ['./homenajes.component.css']
})
export class HomenajesComponent implements OnInit {

//TODO: crear servicio JSON
muralesHomenajes: Mural[] = [
  {
    idName: "DestrezaWaxa",
    title: "Destreza Waxa",
    imgs: ["./assets/bg-telurbicos.jpg","./assets/bg-homenajes.jpg","./assets/bg-telurbicos.jpg"],
    description: "Primer mural telúrbico copado",
    data: "setiembre 2021",
    location: "Costanera Norte, Córdoba Capital",
    tipoMural: "telurbicos"
  },
  {
    idName: "Waxingona",
    title: "Waxingona",
    imgs: ["./assets/bg-otros.jpg","./assets/bg-homenajes.jpg","./assets/bg-otros.jpg"],
    description: "mural copado",
    data: "diciembre 2021",
    location: "...",
    tipoMural: "telurbicos"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
