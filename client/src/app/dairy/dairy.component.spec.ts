import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyComponent } from './dairy.component';

describe('DairyComponent', () => {
  let component: DairyComponent;
  let fixture: ComponentFixture<DairyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DairyComponent]
    });
    fixture = TestBed.createComponent(DairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
