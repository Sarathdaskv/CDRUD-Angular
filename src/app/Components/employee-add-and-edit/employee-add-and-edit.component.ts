
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-add-and-edit',
  templateUrl: './employee-add-and-edit.component.html',
  styleUrls: ['./employee-add-and-edit.component.scss']
})
export class EmployeeAddAndEditComponent implements OnInit {
  empForm: FormGroup;

  education: string[] = [
    'Matriculation',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ]

  constructor(private formBulid: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: MatDialogRef<EmployeeAddAndEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {


    this.empForm = formBulid.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      education: ['', [Validators.required]],
      company: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {

    this.empForm.patchValue(this.data);

  }
 
  onFormSubmit() {

    if (this.empForm.valid) {
      console.log(this.data);

      if (this.data != null) {
        this.empService.editEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee record updated.')
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
      else {
        this.empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee record added.')
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    }

  }
}

