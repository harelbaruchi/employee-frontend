import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly apiURL: string = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media/';

  constructor(private http: HttpClient) {}

  getDepList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/department/');
  }

  addDepartment(value: any) {
    return this.http.post(this.apiURL + '/department/', value);
  }

  updateDepartment(value: any) {
    return this.http.put(this.apiURL + '/department/', value);
  }

  deleteDepartment(value: any) {
    return this.http.delete(this.apiURL + '/department/' + value);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/employee/');
  }

  addEmployee(value: any) {
    return this.http.post(this.apiURL + '/employee/', value);
  }

  updateEmployee(value: any) {
    return this.http.put(this.apiURL + '/employee/', value);
  }

  deleteEmployee(value: any) {
    return this.http.delete(this.apiURL + '/employee/' + value);
  }

  UploadPhoto(val: any) {
    return this.http.post(this.apiURL + '/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/department/');
  }
}
