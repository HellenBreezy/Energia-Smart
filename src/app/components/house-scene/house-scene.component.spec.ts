import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSceneComponent } from './house-scene.component';

describe('HouseSceneComponent', () => {
  let component: HouseSceneComponent;
  let fixture: ComponentFixture<HouseSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
