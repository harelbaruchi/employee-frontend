import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css'],
})
export class ShowDepComponent implements OnInit {
  constructor(private service: SharedService) {}

  DepartmentList: any = [];
  ModalTitle: string = '';
  ActivateAddEditDepComp: boolean = false;
  dep: any;
  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: '',
    };
    this.ModalTitle = 'Add Department';
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = 'Edit Department';
    this.ActivateAddEditDepComp = true;
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  clickDelete(item: any) {
    if (confirm('Are you sure you want to delete this department??')) {
      this.service.deleteDepartment(item.DepartmentId).subscribe((res) => {
        alert(res.toString());
        this.refreshDepList();
      });
    }
  }

  refreshDepList(): void {
    this.service.getDepList().subscribe((data) => {
      this.DepartmentList = data;
    });
  }
}
