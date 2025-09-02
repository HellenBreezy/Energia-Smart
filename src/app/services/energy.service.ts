import { Injectable, computed, signal } from '@angular/core';

export type ApplianceKey =
  | 'fridge' | 'tv' | 'ac' | 'washing' | 'microwave' | 'pc';

export interface Appliance {
  key: ApplianceKey;
  name: string;
  watts: number; // potência nominal média
}

export interface UsageEntry {
  key: ApplianceKey;
  name: string;
  watts: number;
  quantity: number;
  hoursPerDay: number;
  days: number;
  kwhMonth: number;
  costMonth: number;
}

@Injectable({ providedIn: 'root' })
export class EnergyService {
  // Tarifa padrão (R$/kWh) — ajuste livre
  tariff = signal(0.95);

  // catálogo base (poderia vir de API)
  appliances: Record<ApplianceKey, Appliance> = {
    fridge:   { key: 'fridge',   name: 'Geladeira',         watts: 150 },
    tv:       { key: 'tv',       name: 'TV',                watts: 100 },
    ac:       { key: 'ac',       name: 'Ar-condicionado',   watts: 1200 },
    washing:  { key: 'washing',  name: 'Máquina de lavar',  watts: 500 },
    microwave:{ key: 'microwave',name: 'Micro-ondas',       watts: 1200 },
    pc:       { key: 'pc',       name: 'Computador',        watts: 200 },
  };

  private _entries = signal<UsageEntry[]>([]);
  entries = computed(() => this._entries());

  totals = computed(() => {
    const list = this._entries();
    const kwh = list.reduce((s, e) => s + e.kwhMonth, 0);
    const cost = list.reduce((s, e) => s + e.costMonth, 0);
    return { kwh, cost };
  });

  addOrUpdate(entry: Omit<UsageEntry, 'kwhMonth' | 'costMonth' | 'name' | 'watts'> & { key: ApplianceKey }) {
    const base = this.appliances[entry.key];
    const kwhMonth = (base.watts * entry.quantity * entry.hoursPerDay * entry.days) / 1000;
    const costMonth = kwhMonth * this.tariff();
    const newEntry: UsageEntry = {
      ...entry,
      name: base.name,
      watts: base.watts,
      kwhMonth,
      costMonth,
    };

    const copy = [...this._entries()];
    const idx = copy.findIndex(e => e.key === newEntry.key);
    if (idx >= 0) copy[idx] = newEntry; else copy.push(newEntry);
    this._entries.set(copy);
  }

  remove(key: ApplianceKey) {
    this._entries.set(this._entries().filter(e => e.key !== key));
  }

  clear() {
    this._entries.set([]);
  }
}
