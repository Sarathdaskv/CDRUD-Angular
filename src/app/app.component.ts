import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmployeeAddAndEditComponent } from './Components/employee-add-and-edit/employee-add-and-edit.component';
import { EmployeeService } from './Services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private dialog: MatDialog, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployeeList().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);

      }

    })
  }

  openAddEditForm() {
    this.dialog.open(EmployeeAddAndEditComponent)
  }


}
