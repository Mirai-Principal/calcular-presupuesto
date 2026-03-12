import { Component, computed, Signal } from '@angular/core';
import { Cabecera } from "./cabecera/cabecera";
import { Formulario } from "./formulario/formulario";
import { Ingreso as ingresoComponent } from "./ingreso/ingreso";
import { Egreso as egresoComponent } from "./egreso/egreso";
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoService } from "./ingreso/ingreso.service";
import { EgresoService } from "./egreso/egreso.service";

@Component({
  selector: 'app-root',
  imports: [Cabecera, Formulario, ingresoComponent, egresoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly ingreso: Signal<Ingreso[]>;
  protected readonly egreso: Signal<Egreso[]>;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {
    this.ingreso = this.ingresoService.ingresos;
    this.egreso = this.egresoService.egresos;
  }

  //Solo se recalcula cuando cambia el signal.
  getIngresoTotal = computed(() => this.ingreso().reduce((total, ingreso) => total + ingreso.monto, 0));

  getEgresoTotal = computed(() => this.egreso().reduce((total, egreso) => total + egreso.monto, 0));

  getPresupuestoTotal = computed(() => this.getIngresoTotal() - this.getEgresoTotal());

  getPorcentajeEgresoTotal = computed(() => (this.getEgresoTotal() / this.getIngresoTotal()));
}
