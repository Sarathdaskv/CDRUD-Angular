
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
    });
  }
  ngOnInit(): void {

    this.empForm.patchValue(this.data);

  }
  onFormSubmit() {

    if (this.empForm.valid) {
      if (this.data) {
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
    } else {
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

