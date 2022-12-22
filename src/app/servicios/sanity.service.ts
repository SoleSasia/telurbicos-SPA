import { Injectable } from '@angular/core';
import sanityClient, { SanityClient } from '@sanity/client';
//import imageUrlBuilder from "@sanity/image-url";
import { Mural } from '../models/mural';

@Injectable({
  providedIn: 'root'
})

export class SanityService {

  constructor() { }

  //creación de una propiedad que utiliza sanityClient para especificar el projectId del backend
  sanityClientCredentials = {
    option: sanityClient({
      projectId: "ns024ktf", //TODO: usar environments 'YOUR_PROJECT_ID'
      dataset: "production"
    })
  }
/*
  //no entiendo qué es esto
  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source);
  */

  //método asincrónico - solicitud GROQ para recuperar lista de películas
  async getMurales(): Promise<Mural[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "mural"]{
        _id,
        idName,
        title,
        imgs,
        description,
        data,
        location,
        tipoMural,
      }`
    );
  }

}

function imageUrlBuilder(option: SanityClient) {
  throw new Error('Function not implemented.');
}

