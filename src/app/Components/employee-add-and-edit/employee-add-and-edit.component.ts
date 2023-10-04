
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-add-and-edit',
  templateUrl: './employee-add-and-edit.component.html',
  styleUrls: ['./employee-add-and-edit.component.scss']
})
export class EmployeeAddAndEditComponent {
  empForm: FormGroup;
  education: string[] = [
    'Matriculation',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ]
  constructor(private formBulid: FormBuilder,private empService:EmployeeService,private dialogRef:MatDialogRef<EmployeeAddAndEditComponent>) {
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
  onFormSubmit() {

    if (this.empForm.valid) {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert('Employee record added.')
          this.dialogRef.close(true);
        },
          error:(err)=>{
            console.log(err);      
          }      
      })

    }
  }
}