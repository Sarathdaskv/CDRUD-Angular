import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {


  constructor(private http:HttpClient) { }

  addEmployee(data:Employee){
    return this.http.post('http://localhost:3000/employees',data)
  }
  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:3000/employees')
  }

  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(`http://localhost:3000/employees/${id}`)
  }

  editEmployee(id:number,formData:Employee){
    return this.http.put(`http://localhost:3000/employees/${id}`,formData)
  }
}
