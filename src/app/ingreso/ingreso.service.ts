import { Injectable, signal } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {

  protected readonly _ingresos = signal<Ingreso[]>([
    { descripcion: 'Sueldo', monto: 1000 },
    { descripcion: 'Alquiler', monto: 500 },
    { descripcion: 'Venta Coche', monto: 500 },
  ]);

  //para que no se pueda modificar directamente el signal desde el componente
  readonly ingresos = this._ingresos.asReadonly();

  //eliminar registro del signal
  eliminar(ingreso: Ingreso) {
    this._ingresos.update(lista =>
      lista.filter(i => i !== ingreso)  //devuleve todos los registros menos el que se eliminó
    );
  }

  //eliminar con id
  // eliminar(id: number) {
  //   this._ingresos.update(lista =>
  //     lista.filter(i => i.id !== id)
  //   );
  // }

  agregar(ingreso: Ingreso) {
    this._ingresos.update(lista => [...lista, ingreso]);
  }
}