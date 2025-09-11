import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeLampadasComponent } from './atividade-lampadas.component';

describe('AtividadeLampadasComponent', () => {
  let component: AtividadeLampadasComponent;
  let fixture: ComponentFixture<AtividadeLampadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeLampadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeLampadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
