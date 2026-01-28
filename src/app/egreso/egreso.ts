import { CommonModule } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import { EgresoService } from './egreso.service';
import { Signal } from '@angular/core';
import { Egreso as egresoModel } from './egreso.model';

@Component({
  selector: 'app-egreso',
  imports: [CommonModule],
  templateUrl: './egreso.html',
  styleUrl: './egreso.css',
})
export class Egreso {
  @Input() ingresoTotal!: number;
  protected readonly egresos!: Signal<egresoModel[]>;

  constructor(private egresoService: EgresoService) {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: egresoModel) {
    this.egresoService.eliminar(egreso);
  }

  //calcular porcentaje de cada egreso a partir de ingreso total
  calcularPorcentajeEgreso(egreso: egresoModel) {
    return (egreso.monto / this.ingresoTotal);
  }
}
