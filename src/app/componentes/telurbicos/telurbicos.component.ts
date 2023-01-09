import { Component, OnInit } from '@angular/core';
import { Mural } from 'src/app/models/mural';
import { SanityService } from 'src/app/servicios/sanity.service';

@Component({
  selector: 'app-telurbicos',
  templateUrl: './telurbicos.component.html',
  styleUrls: ['./telurbicos.component.css']
})

export class TelurbicosComponent implements OnInit {
/*
  //TODO: crear servicio JSON
  muralesTelurbicos: Mural[] = [
    {
      _id: 1,
      idName: "DestrezaWaxa",
      title: "Destreza Waxa",
      imgs: ["./assets/bg-telurbicos.jpg","./assets/bg-homenajes.jpg","./assets/bg-telurbicos.jpg"],
      description: "Primer mural telúrbico copado",
      data: "setiembre 2021",
      location: "Costanera Norte, Córdoba Capital",
      tipoMural: "telurbicos"
    },
    {
      _id: 2,
      idName: "Waxingona",
      title: "Waxingona",
      imgs: ["./assets/bg-otros.jpg","./assets/bg-homenajes.jpg","./assets/bg-otros.jpg"],
      description: "mural copado",
      data: "diciembre 2021",
      location: "...",
      tipoMural: "telurbicos"
    }
  ];
*/
  constructor(private sanityService: SanityService) { }

  muralesTelurbicos: Mural[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }
  

  ngOnInit(): void {
    this.getTelurbicos();
  }

  async getTelurbicos(): Promise<Mural[]>  {
    this.muralesTelurbicos = await this.sanityService.getTelurbicos();
    return this.muralesTelurbicos;
  }

  async getMurales(): Promise<Mural[]>  {
    this.muralesTelurbicos = await this.sanityService.getMurales();
    return this.muralesTelurbicos;
  }
}
