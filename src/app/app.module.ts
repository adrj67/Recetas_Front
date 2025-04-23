import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRecetaComponent } from './receta/lista-receta.component';
import { DetalleRecetaComponent } from './receta/detalle-receta.component';
import { NuevaRecetaComponent } from './receta/nueva-receta.component';
import { EditarRecetaComponent } from './receta/editar-receta.component';
import { CostoComponent } from './costos/costo/costo.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './receta/filter.pipe';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaRecetaComponent,
    DetalleRecetaComponent,
    NuevaRecetaComponent,
    EditarRecetaComponent,
    FilterPipe,
    CostoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
