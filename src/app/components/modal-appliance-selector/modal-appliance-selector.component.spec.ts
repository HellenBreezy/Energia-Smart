import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApplianceSelectorComponent } from './modal-appliance-selector.component';

describe('ModalApplianceSelectorComponent', () => {
  let component: ModalApplianceSelectorComponent;
  let fixture: ComponentFixture<ModalApplianceSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalApplianceSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalApplianceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
