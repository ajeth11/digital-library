import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { HeaderComponent } from '../common/header/header.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBookComponent } from './list-book/list-book.component';
import { TableComponent } from '../common/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [SidenavComponent, AddBookComponent, ListBookComponent, HeaderComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidenavRoutingModule,
    FontAwesomeModule,
    ChartModule
  ]
})
export class SidenavModule { }
