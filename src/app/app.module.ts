import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRecetaComponent } from './receta/lista-receta.component';
import { DetalleRecetaComponent } from './receta/detalle-receta.component';
import { NuevaRecetaComponent } from './receta/nueva-receta.component';
import { EditarRecetaComponent } from './receta/editar-receta.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListaRecetaComponent,
    DetalleRecetaComponent,
    NuevaRecetaComponent,
    EditarRecetaComponent
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
