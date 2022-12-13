import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TelurbicosComponent } from './componentes/telurbicos/telurbicos.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomenajesComponent } from './componentes/homenajes/homenajes.component';
import { OtrosComponent } from './componentes/otros/otros.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { NosotresComponent } from './componentes/nosotres/nosotres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TelurbicosComponent,
    HomeComponent,
    HomenajesComponent,
    OtrosComponent,
    MapaComponent,
    NosotresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
