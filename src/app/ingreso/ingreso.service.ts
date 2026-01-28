import { Injectable, signal } from '@angular/core';
import { Ingreso } from './ingreso';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  protected readonly ingresos = signal<Ingreso[]>([
    { descripcion: 'Sueldo', monto: 1000 },
    { descripcion: 'Alquiler', monto: 500 },
  ]);
}
