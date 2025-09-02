import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, signal, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApplianceKey, EnergyService } from '../../services/energy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges{
  @Input() applianceKey: ApplianceKey | null = null;
  @Output() closed = new EventEmitter<void>();
  @ViewChild('dlg') dlg!: ElementRef<HTMLDialogElement>;

  title = signal<string>('—');
  watts = signal<number>(0);
  tariff = this.energy.tariff;

  form = new FormGroup({
    quantity: new FormControl(1, { nonNullable: true, validators: [Validators.min(1)] }),
    hoursPerDay: new FormControl(4, { nonNullable: true, validators: [Validators.min(0)] }),
    days: new FormControl(30, { nonNullable: true, validators: [Validators.min(1), Validators.max(31)] }),
  });

  constructor(private energy: EnergyService) {}

  ngOnChanges() {
    if (!this.applianceKey) return;
    const base = this.energy.appliances[this.applianceKey];
    this.title.set(base.name);
    this.watts.set(base.watts);
    this.open();
  }

  valid() {
    return this.form.valid && this.applianceKey;
  }

  kwhMonth() {
    const f = this.form.getRawValue();
    return (this.watts() * f.quantity * f.hoursPerDay * f.days) / 1000;
  }

  costMonth() {
    return this.kwhMonth() * this.tariff();
  }

  open() { this.dlg?.nativeElement.showModal(); }
  close() { this.dlg?.nativeElement.close(); this.closed.emit(); }

  save() {
    if (!this.applianceKey) return;
    const f = this.form.getRawValue();
    this.energy.addOrUpdate({
      key: this.applianceKey,
      quantity: f.quantity,
      hoursPerDay: f.hoursPerDay,
      days: f.days,
    });
    this.close();
  }

  updateTariff(v: string) {
    const n = Number(v);
    if (!Number.isNaN(n) && n >= 0) this.energy.tariff.set(n);
  }
}
