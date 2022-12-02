import { Component, OnInit } from '@angular/core';
import { Mural } from 'src/app/models/mural';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {

  //TODO: crear servicio JSON
  muralesOtros: Mural[] = [
    {
      id: 1,
      idName: "DestrezaWaxa",
      title: "Destreza Waxa",
      imgs: ["./assets/bg-telurbicos.jpg","./assets/bg-homenajes.jpg","./assets/bg-telurbicos.jpg"],
      description: "Primer mural telúrbico copado",
      data: "setiembre 2021",
      location: "Costanera Norte, Córdoba Capital",
      tipoMural: "telurbicos"
    },
    {
      id: 2,
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
