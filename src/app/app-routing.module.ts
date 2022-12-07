import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importo componentes
import { TelurbicosComponent } from './componentes/telurbicos/telurbicos.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomenajesComponent } from './componentes/homenajes/homenajes.component';
import { OtrosComponent } from './componentes/otros/otros.component';
import { MapaComponent } from './componentes/mapa/mapa.component';

//defino rutas
const routes: Routes = [
  {path: 'm-telurbicos', component: TelurbicosComponent},
  {path: 'm-homenajes', component: HomenajesComponent},
  {path: 'm-otros', component: OtrosComponent},
  {path: 'm-mapa', component: MapaComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
