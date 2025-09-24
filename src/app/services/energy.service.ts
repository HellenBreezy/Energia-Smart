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

  private readonly pricePerKWh = 0.67; // R$ por kWh

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

  addCalculation(calc: { appliance: string, power: number, hoursPerDay: number, daysPerMonth: number }) {
    // Carrega do localStorage
    const stored = localStorage.getItem('energyCalculations');
    let calculations: EnergyCalculation[] = stored ? JSON.parse(stored) : [];

    // Verifica se já existe um cálculo para esse aparelho
    const existingIndex = calculations.findIndex(c => c.appliance === calc.appliance);

    const consumptionKWh = this.calculateConsumption(calc.power, calc.hoursPerDay, calc.daysPerMonth);
    const cost = this.calculateCost(consumptionKWh);

    const newCalc: EnergyCalculation = { 
      ...calc, 
      consumptionKWh, 
      cost, 
      timestamp: new Date() 
    };

    if (existingIndex !== -1) {
      // Atualiza cálculo existente
      calculations[existingIndex] = newCalc;
    } else {
      // Adiciona novo cálculo
      calculations.push(newCalc);
    }

    // Atualiza a propriedade interna
    this.calculations = calculations;

    // Salva de volta no localStorage
    localStorage.setItem('energyCalculations', JSON.stringify(calculations));

    // Atualiza os observables
    this.updateTotals();
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
