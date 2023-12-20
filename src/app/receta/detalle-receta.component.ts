import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../service/receta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Receta } from '../models/receta';

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
/**
 * https://www.discoduroderoer.es/como-crear-un-pdf-en-angular-con-pdfmake/
 * para crear PDF
 */
  volver(): void {
    this.router.navigate(['/']);
  }

}
