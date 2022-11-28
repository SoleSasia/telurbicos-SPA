import { Component, OnInit } from '@angular/core';
import { SlideHero } from 'src/app/models/slideHero';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})

export class HeroCarouselComponent implements OnInit {

  /*//bg una imagen (prueba)
  titleTelurbicos:string = "Murales telúrbicos";
  textTelurbicos:string = "Aquí podrás encontar todo nuestro trabajo telúrbico.";
  bgImage:string = "./assets/bg-telurbicos.jpg";*/

  //bg-image0-carousel: arreglo de objetos 
  //TODO: crear service + JSON
  
  slidesHero: SlideHero[] = [
    {
      id: 1,
      img: "./assets/bg-telurbicos.jpg",
      title: "Hola! Te damos la bienvenida a nuestra web!",
      description: "",
      link: ""
    },
    {
      id: 2,
      img: "./assets/bg-telurbicos.jpg",
      title: "Murales telúrbicos",
      description: "Aquí podrás encontar todo nuestro trabajo telúrbico.",
      link: ""
    },
    {
      id: 3,
      img: "./assets/bg-homenajes.jpg",
      title: "Homenajes",
      description: "Aquí podrás acceder a los murales donde hemos homenajeado a alguien.",
      link: ""
    },
    {
      id: 4,
      img: "./assets/bg-otros.jpg",
      title: "Otros murales",
      description: "Aquí podrás encontrar murales sobre temáticas diversas.",
      link: ""
    },
    {
      id: 5,
      img: "./assets/bg-telurbicos.jpg",
      title: "Nosotres",
      description: "Y aquí te contamos un poco de nosotres y nuestro trabajo.",
      link: ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}



