import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeAparelhosComponent } from './atividade-aparelhos.component';

describe('AtividadeAparelhosComponent', () => {
  let component: AtividadeAparelhosComponent;
  let fixture: ComponentFixture<AtividadeAparelhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeAparelhosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeAparelhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
