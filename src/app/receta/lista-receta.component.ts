import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/receta';
import { RecetaService } from '../service/receta.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lista-receta',
  templateUrl: './lista-receta.component.html',
  styleUrls: ['./lista-receta.component.css']
})
export class ListaRecetaComponent implements OnInit {

  recetas: Receta[] = []; 

  constructor(
    private recetaService: RecetaService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.cargarRecetas();
  }

  cargarRecetas(): void {
    this.recetaService.lista().subscribe({
      next: data => {
        this.recetas = data;
      },     
      error: err => console.log(err)
      }
    );
  }

  borrar(id: any) {
    //  alert('borrar el ' + id );
    // Pregunta al usuario si está seguro de eliminar el registro
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
  
    // Si el usuario confirma, procede con la eliminación
    if (confirmacion) {
      this.recetaService.delete(id).subscribe({
        next: data => {
          this.toastr.success('Receta Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarRecetas();
        },
        error: err => {
          this.toastr.error(err.error.mensaje, 'FAIL', {
            timeOut: 3000, positionClass: 'toast-center-center'
          });
        }
      });
    } else {
      console.log('Eliminación cancelada por el usuario.');
    }
  }
  
}
