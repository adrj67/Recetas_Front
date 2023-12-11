import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../service/receta.service';
import { Receta } from '../models/receta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.css']
})
export class NuevaRecetaComponent implements OnInit {
  
  tipo: string = '';
  autor: string = '';
  nombre: string = '';
  ingredientes: string = '';  
  procedimiento: string = '';

  constructor(
    private recetaService: RecetaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    //console.log('Iniciando onCreate()...');
    const receta = new Receta(this.tipo, this.autor, this.nombre, this.ingredientes, this.procedimiento);
    //console.log('Receta creada:', receta);
    this.recetaService.save(receta).subscribe({
        next: data => {
            //console.log('Respuesta del backend:', data);
            this.toastr.success('Receta Creada', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
            this.router.navigate(['/']);
        },    
        error: err => {
            console.error('Error al crear receta:', err);
            this.toastr.error(err.error.mensaje, 'FAIL', {timeOut: 3000, positionClass: 'toast-top-center'});
            //this.router.navigate(['/']);
        }
    });
    //console.log('Finalizando onCreate()...');
}

}