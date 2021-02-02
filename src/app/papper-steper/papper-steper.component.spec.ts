import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapperSteperComponent } from './papper-steper.component';

describe('PapperSteperComponent', () => {
  let component: PapperSteperComponent;
  let fixture: ComponentFixture<PapperSteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapperSteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapperSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
