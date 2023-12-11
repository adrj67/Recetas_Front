import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRecetaComponent } from './receta/lista-receta.component';
import { DetalleRecetaComponent } from './receta/detalle-receta.component';
import { NuevaRecetaComponent } from './receta/nueva-receta.component';
import { EditarRecetaComponent } from './receta/editar-receta.component';

// creamos las rutas
const routes: Routes = [
  {path: '', component: ListaRecetaComponent},
  {path: 'detalle/:id', component: DetalleRecetaComponent},
  {path: 'nueva', component: NuevaRecetaComponent},
  {path: 'editar/:id', component: EditarRecetaComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
