import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from '../models/receta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  // Conectamos con el BackEnd - RecetaController>RequestMapping
  recetaURL = 'http://localhost:8080/receta/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Receta[]>{
    return this.httpClient.get<Receta[]>(this.recetaURL + 'lista');
  }

  public detail(id: number): Observable<Receta>{
    return this.httpClient.get<Receta>(this.recetaURL + `detail/${id}`); // ver que hay que cambiar comillas '' por `` cuando lleva parametros
  }

  public detailName(nombre: string): Observable<Receta>{
    return this.httpClient.get<Receta>(this.recetaURL + `detailName/${nombre}`); // ver que hay que cambiar comillas '' por `` cuando lleva parametros
  }

  public save(receta: Receta): Observable<any>{
    return this.httpClient.post<any>(this.recetaURL + 'create', receta);
  }

  public update(id: number, receta: Receta): Observable<any> {
    return this.httpClient.put<any>(this.recetaURL + `update/${id}`, receta); // ver que hay que cambiar comillas '' por `` cuando lleva parametros
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.recetaURL + `delete/${id}`); // ver que hay que cambiar comillas '' por `` cuando lleva parametros
  }
}
