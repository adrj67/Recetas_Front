import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { RecetaService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recetas: Receta[] = []; 

  constructor(private recetaService: RecetaService,) {  }

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

}
