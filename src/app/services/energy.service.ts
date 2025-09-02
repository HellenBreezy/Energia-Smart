// src/app/services/energy.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface EnergyCalculation {
  appliance: string;
  power: number;
  hours: number;
  consumption: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  private calculations: EnergyCalculation[] = [];
  private totalConsumption = new BehaviorSubject<number>(0);
  private ecoScore = new BehaviorSubject<number>(1000);
  
  totalConsumption$ = this.totalConsumption.asObservable();
  ecoScore$ = this.ecoScore.asObservable();

  constructor() {
    this.loadFromLocalStorage();
  }

  calculateConsumption(power: number, hours: number): number {
    return power * hours;
  }

  addCalculation(calculation: Omit<EnergyCalculation, 'timestamp'>) {
    const newCalculation: EnergyCalculation = {
      ...calculation,
      timestamp: new Date()
    };
    
    this.calculations.push(newCalculation);
    this.updateTotals();
    this.saveToLocalStorage();
  }

  getHistory(): EnergyCalculation[] {
    return this.calculations;
  }

  clearHistory() {
    this.calculations = [];
    this.updateTotals();
    this.saveToLocalStorage();
  }

  private updateTotals() {
    const total = this.calculations.reduce((sum, calc) => sum + calc.consumption, 0);
    this.totalConsumption.next(total);
    
    // Quanto menor o consumo, maior a pontuação
    const score = Math.max(0, 1000 - Math.floor(total * 20));
    this.ecoScore.next(score);
  }

  private saveToLocalStorage() {
    localStorage.setItem('energyCalculations', JSON.stringify(this.calculations));
  }

  private loadFromLocalStorage() {
    const saved = localStorage.getItem('energyCalculations');
    if (saved) {
      this.calculations = JSON.parse(saved);
      // Converter strings de data para objetos Date
      this.calculations.forEach(calc => {
        calc.timestamp = new Date(calc.timestamp);
      });
      this.updateTotals();
    }
  }
}