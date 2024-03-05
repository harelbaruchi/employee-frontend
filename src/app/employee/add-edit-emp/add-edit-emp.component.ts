import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  @Input() emp: any;
  EmployeeId: string = '';
  EmployeeName: string = '';
  Department: string = '';
  DateOfJoining: string = '';
  PhotoFileName: string = '';
  PhotoFilePath: string = '';

  DepartmentList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(): void {
    this.sharedService.getAllDepartmentNames().subscribe((data) => {
      console.log(data);

      this.DepartmentList = data;

      this.EmployeeId = this.emp?.EmployeeId;
      this.EmployeeName = this.emp?.EmployeeName;
      this.Department = this.emp?.Department;
      this.DateOfJoining = this.emp?.DateOfJoining;
      this.PhotoFileName = this.emp?.PhotoFileName;
      this.PhotoFilePath = this.sharedService.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    let val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };

    this.sharedService.addEmployee(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    let val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };
    this.sharedService.updateEmployee(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  uploadPhoto(event: any) {
    let file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    this.sharedService.UploadPhoto(formData).subscribe((res) => {
      this.PhotoFileName = res.toString(); //the photo file address
      this.PhotoFilePath = this.sharedService.PhotoUrl + this.PhotoFileName;
    });
  }
}
