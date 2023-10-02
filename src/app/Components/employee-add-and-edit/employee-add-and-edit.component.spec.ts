import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddAndEditComponent } from './employee-add-and-edit.component';

describe('EmployeeAddAndEditComponent', () => {
  let component: EmployeeAddAndEditComponent;
  let fixture: ComponentFixture<EmployeeAddAndEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAddAndEditComponent]
    });
    fixture = TestBed.createComponent(EmployeeAddAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
