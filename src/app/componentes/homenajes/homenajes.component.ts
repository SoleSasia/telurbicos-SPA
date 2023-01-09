import { Component, OnInit } from '@angular/core';
import { Mural } from 'src/app/models/mural';
import { SanityService } from 'src/app/servicios/sanity.service';

@Component({
  selector: 'app-homenajes',
  templateUrl: './homenajes.component.html',
  styleUrls: ['./homenajes.component.css']
})
export class HomenajesComponent implements OnInit {
  
  /*
//TODO: crear servicio JSON
muralesHomenajes: Mural[] = [
  {
    idName: "DestrezaWaxa",
    title: "Destreza Waxa",
    imgs: ["./assets/bg-telurbicos.jpg","./assets/bg-homenajes.jpg","./assets/bg-telurbicos.jpg"],
    description: "Primer mural telúrbico copado",
    paintingData: "setiembre 2021",
    location: "Costanera Norte, Córdoba Capital",
    tipoMural: "telurbicos"
  },
  {
    idName: "Waxingona",
    title: "Waxingona",
    imgs: ["./assets/bg-otros.jpg","./assets/bg-homenajes.jpg","./assets/bg-otros.jpg"],
    description: "mural copado",
    paintingData: "diciembre 2021",
    location: "...",
    tipoMural: "telurbicos"
  }
];
*/
constructor(private sanityService: SanityService) { }

muralesHomenajes: Mural[] = [];

imageUrl(source: any) {
  return this.sanityService.urlFor(source);
}


ngOnInit(): void {
  this.getHomenajes();
}

async getHomenajes(): Promise<Mural[]>  {
  this.muralesHomenajes = await this.sanityService.getHomenajes();
  return this.muralesHomenajes;
}

}
