import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add-and-edit',
  templateUrl: './employee-add-and-edit.component.html',
  styleUrls: ['./employee-add-and-edit.component.scss']
})
export class EmployeeAddAndEditComponent {
education:string[]=[
  'Matriculation',
  'Diploma',
  'Graduate',
  'Post Graduate'
]
}
