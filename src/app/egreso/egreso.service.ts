import { Injectable, signal } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root',
})
export class EgresoService {
  readonly _egresos = signal<Egreso[]>([
    { descripcion: 'Alquiler', monto: 500 },
    { descripcion: 'Comida', monto: 200 },
    { descripcion: 'Transporte', monto: 100 },
    { descripcion: 'Entretenimiento', monto: 50 },
  ]);

  //para que no se pueda modificar directamente el signal desde el componente
  readonly egresos = this._egresos.asReadonly();

  eliminar(egreso: Egreso) {
    this._egresos.update(lista =>
      lista.filter(e => e !== egreso)
    );
  }

  agregar(egreso: Egreso) {
    this._egresos.update(lista => [...lista, egreso]);
  }
}
