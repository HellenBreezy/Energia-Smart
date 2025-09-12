import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface EnergyCalculation {
  appliance: string;
  power: number;       // W
  hoursPerDay: number; // horas/dia
  daysPerMonth: number; // dias/mês
  consumptionKWh: number;
  cost: number;        // R$
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  private calculations: EnergyCalculation[] = [];
  private totalConsumption = new BehaviorSubject<number>(0);
  private totalCost = new BehaviorSubject<number>(0);

  totalConsumption$ = this.totalConsumption.asObservable();
  totalCost$ = this.totalCost.asObservable();

  private readonly pricePerKWh = 0.75; // R$ por kWh

  constructor() {
    this.loadFromLocalStorage();
  }

  calculateConsumption(powerW: number, hoursPerDay: number, daysPerMonth: number): number {
    // Converter W para kW e calcular kWh
    return (powerW * hoursPerDay * daysPerMonth) / 1000;
  }

  calculateCost(consumptionKWh: number): number {
    return consumptionKWh * this.pricePerKWh;
  }

  addCalculation(calculation: Omit<EnergyCalculation, 'consumptionKWh' | 'cost' | 'timestamp'>) {
    const consumptionKWh = this.calculateConsumption(calculation.power, calculation.hoursPerDay, calculation.daysPerMonth);
    const cost = this.calculateCost(consumptionKWh);

    const newCalculation: EnergyCalculation = {
      ...calculation,
      consumptionKWh,
      cost,
      timestamp: new Date()
    };

    this.calculations.push(newCalculation);
    this.updateTotals();
    this.saveToLocalStorage();
  }

  private updateTotals() {
    const total = this.calculations.reduce((sum, c) => sum + c.consumptionKWh, 0);
    const totalCost = this.calculations.reduce((sum, c) => sum + c.cost, 0);

    this.totalConsumption.next(total);
    this.totalCost.next(totalCost);
  }

  private saveToLocalStorage() {
    localStorage.setItem('energyCalculations', JSON.stringify(this.calculations));
  }

  private loadFromLocalStorage() {
    const saved = localStorage.getItem('energyCalculations');
    if (saved) {
      this.calculations = JSON.parse(saved);
      this.calculations.forEach(calc => calc.timestamp = new Date(calc.timestamp));
      this.updateTotals();
    }
  }
}
