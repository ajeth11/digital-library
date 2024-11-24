import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [{
  path: '',
  component: SidenavComponent
},
{
  path: 'add-book',
  component: AddBookComponent
},
{
  path: 'view-book',
  component: ListBookComponent
},
{
  path: 'delete-book',
  component: ListBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
