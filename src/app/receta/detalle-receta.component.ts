import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../service/receta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Receta } from '../models/receta';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.component.html',
  styleUrls: ['./detalle-receta.component.css']
})
export class DetalleRecetaComponent implements OnInit {

  receta: Receta  = null; // error si pongo  receta: Receta = null; cambie tsconfi.ts

  constructor(
    private recetaService: RecetaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recetaService.detail(id).subscribe({
      next: data=>{
        this.receta = data;
      },
      error:err=>{
        this.toastr.error(err.error.mensaje, 'FAIL', {
        timeOut: 3000, positionClass: 'toast-center-center'});
        this.volver();
      }
    });
  }

  exportarExcel(): void {
    if (this.receta) {
      // Crear una hoja de trabajo de Excel
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([this.receta]); // Convertir la receta en un array de un elemento

      // Crear un libro de Excel
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Datos');

      // Guardar el libro como archivo Excel
      const nombreArchivo = this.receta.nombre.replace(/[^a-zA-Z0-9]/g, '_'); // Eliminar caracteres especiales
      XLSX.writeFile(wb, `${nombreArchivo}.xlsx`);
    } else {
      console.error('No hay datos de receta para exportar a Excel.');
    }
  }
  
  volver(): void {
    this.router.navigate(['/']);
  }

}
