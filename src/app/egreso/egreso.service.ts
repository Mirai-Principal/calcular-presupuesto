import { Injectable, signal } from '@angular/core';
import { Egreso } from './egreso';

@Injectable({
  providedIn: 'root',
})
export class EgresoService {
  protected readonly egresos = signal<Egreso[]>([
    { descripcion: 'Alquiler', monto: 500 },
    { descripcion: 'Comida', monto: 200 },
  ]);
}
