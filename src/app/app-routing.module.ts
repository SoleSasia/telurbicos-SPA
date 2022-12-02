import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importo componentes
import { TelurbicosComponent } from './componentes/telurbicos/telurbicos.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomenajesComponent } from './componentes/homenajes/homenajes.component';

//defino rutas
const routes: Routes = [
  {path: 'm-telurbicos', component: TelurbicosComponent},
  {path: 'm-homenajes', component: HomenajesComponent},

  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
