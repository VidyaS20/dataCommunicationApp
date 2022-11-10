import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDescriptionComponent } from './cake-description.component';

describe('CakeDescriptionComponent', () => {
  let component: CakeDescriptionComponent;
  let fixture: ComponentFixture<CakeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
