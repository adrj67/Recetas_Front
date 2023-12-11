import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/receta';
import { RecetaService } from '../service/receta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent implements OnInit {

  receta: Receta  = null; // error si pongo  receta: Receta = null; cambie tsconfi.ts

  constructor(
    private recetaService: RecetaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    //alert(id); comprobar si funciona por consola
    this.recetaService.detail(id).subscribe({
      next: data=>{
        this.receta = data;
      },
      error:err=>{
        this.toastr.error(err.error.mensaje, 'FAIL', {
        timeOut: 3000, positionClass: 'toast-center-center'});
        this.router.navigate(['/']);
      }
    });
  }

  onUpdate(): void{
    console.log('Iniciando onUpdate()...');
    const id = this.activatedRoute.snapshot.params['id'];
    console.log('Receta Actualizada 1:', this.receta);
    this.recetaService.update(id, this.receta).subscribe({
      next: data => {
        console.log('Respuesta del backend:', data);
        this.toastr.success('Receta Actualizada', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['/']);
    },    
    error: err => {
        console.error('Error al crear receta:', err);
        this.toastr.error(err.error.mensaje, 'FAIL', {timeOut: 3000, positionClass: 'toast-top-center'});
        //this.router.navigate(['/']);
    }
    });
    console.log('Finalizando onUpdate()...');
  }

}
