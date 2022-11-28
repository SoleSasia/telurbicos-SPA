import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroCarouselComponent } from './componentes/hero-carousel/hero-carousel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TelurbicosComponent } from './componentes/telurbicos/telurbicos.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroCarouselComponent,
    FooterComponent,
    TelurbicosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
