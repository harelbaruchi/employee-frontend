import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css'],
})
export class ShowEmpComponent implements OnInit {
  constructor(private service: SharedService) {}

  EmployeeList: any = [];
  ModalTitle: string = '';
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmplyeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.jpg',
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    this.ModalTitle = 'Edit Employee';
    this.ActivateAddEditEmpComp = true;
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  clickDelete(item: any) {
    if (confirm('Are you sure you want to delete this employee??')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe((res) => {
        alert(res.toString());
        this.refreshEmpList();
      });
    }
  }

  refreshEmpList(): void {
    this.service.getEmpList().subscribe((data) => {
      this.EmployeeList = data;
    });
  }
}
