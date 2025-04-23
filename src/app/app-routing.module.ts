import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRecetaComponent } from './receta/lista-receta.component';
import { DetalleRecetaComponent } from './receta/detalle-receta.component';
import { NuevaRecetaComponent } from './receta/nueva-receta.component';
import { EditarRecetaComponent } from './receta/editar-receta.component';
import { CostoComponent } from './costos/costo/costo.component';
import { HomeComponent } from './home/home/home.component';


// creamos las rutas
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detalle/:id', component: DetalleRecetaComponent},
  {path: 'nueva', component: NuevaRecetaComponent},
  {path: 'editar/:id', component: EditarRecetaComponent},
  {path: 'costos', component: CostoComponent},
  {path: 'lista', component: ListaRecetaComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
