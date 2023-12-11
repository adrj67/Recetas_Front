export class Receta {

id?: number;
tipo: string;
autor: string;
nombre: string;
ingredientes: string;
procedimiento: string;

constructor(tipo: string, autor: string, nombre: string, ingredientes: string, procedimiento: string) {
    this.tipo = tipo;
    this.autor = autor;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.procedimiento = procedimiento
}

}
