import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {

  slides: string[] = ["./assets/bg-telurbicos.jpg","./assets/bg-homenajes.jpg", "./assets/bg-otros.jpg"];
  titleTelurbicos:string = "Murales telúrbicos";
  textTelurbicos:string = "Aquí podrás encontar todo nuestro trabajo telúrbico.";
  bgImage:string = "./assets/bg-telurbicos.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
