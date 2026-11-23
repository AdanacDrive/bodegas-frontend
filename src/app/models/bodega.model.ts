import { Producto } from './producto.model';

export interface Bodega {
  id: number;
  nombre: string;
  ubicacion: string;
  productos: Producto[];
}

// para registrar: el backend genera el id y la bodega empieza sin productos
export type NuevaBodega = Omit<Bodega, 'id' | 'productos'>;
