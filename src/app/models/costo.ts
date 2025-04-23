export class Costo {

    id?: number;
    ingrediente:string;
    precioUnidad:number;
    unidad:string;
    cantidad:number;
    precioCantidad:number;
  
    
    
    constructor(
        ingrediente: string, precioUnidad: number, unidad: string, cantidad: number,
        precioCantidad: number
        ) {
        this.ingrediente = ingrediente;
        this.precioUnidad = precioUnidad;
        this.unidad = unidad;
        this.cantidad = cantidad;
        this.precioCantidad = precioCantidad;
    }
    
    }
    