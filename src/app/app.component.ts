import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmployeeAddAndEditComponent } from './Components/employee-add-and-edit/employee-add-and-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudApp';

  constructor(private dialog:MatDialog){}
  openAddEditForm(){
    this.dialog.open(EmployeeAddAndEditComponent)
  }
}
