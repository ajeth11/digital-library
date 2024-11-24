import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.scss'
})
export class ListBookComponent implements OnInit {

  list: any = [];

  constructor(private commonService: CommonService, private router: Router) {}

  get isView() {
    return this.router?.url === '/home/view-book';
  }

  ngOnInit(): void {
    this.list = this.commonService.getLocal('book');
  }

  remove(data: any){
    const i = this.list.findIndex((el:any) => el.isbn === data.isbn);
    this.list.splice(i, 1);
    this.commonService.saveLocal('book', this.list);
  }
}
