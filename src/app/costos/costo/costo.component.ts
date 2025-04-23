import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Costo } from 'src/app/models/costo';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.css']
})
export class CostoComponent implements OnInit {

  total:number = null;
  porciones:number = 1;
  
  listaCosto: Costo[] = [];
  costo:Costo = {
   
    ingrediente:'',
    precioUnidad:null,
    unidad:'',
    cantidad: null,
    precioCantidad: null,
  } 
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mostrarListaCosto();

    this.sumarPrecioCantidad();
  }

  sumarPrecioCantidad(): number {
    return this.listaCosto.reduce((acumulador, costo) => acumulador + costo.precioCantidad, 0);
   }

  calcular(){
    this.costo.precioCantidad=this.costo.precioUnidad * this.costo.cantidad;
    this.listaCosto.push({ ...this.costo });
    this.costo = { ingrediente: '', precioUnidad:null , unidad: '', cantidad: null, precioCantidad: 0 };
    console.log(this.listaCosto);
  }

  mostrarListaCosto():void{
    console.log(this.listaCosto);
  }

  borrarIngrediente(i: any) {
    this.listaCosto.splice(i, 1);
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
/* https://stackblitz.com/edit/suma-total?file=src%2Fapp%2Fapp.component.html 
  https://es.stackoverflow.com/questions/209772/sumar-valores-dentro-de-ngfor
*/