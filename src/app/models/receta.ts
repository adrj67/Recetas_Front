export class Receta {

    id?: number;
    tipo: string;
    autor: string;
    nombre: string;
    rendimiento: string;
    ingredientes: string;
    procedimiento: string;
    consejo: string;

constructor(
    tipo: string, autor: string, nombre: string, rendimiento: string,
    ingredientes: string, procedimiento: string, consejo: string
    ) {
    this.tipo = tipo;
    this.autor = autor;
    this.nombre = nombre;
    this.rendimiento = rendimiento;
    this.ingredientes = ingredientes;
    this.procedimiento = procedimiento;
    this.consejo = consejo;
}

}
