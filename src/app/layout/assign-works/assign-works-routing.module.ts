import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignWorksComponent } from './assign-works/assign-works.component';

const routes: Routes = [
  {path :'',component:AssignWorksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignWorksRoutingModule { }
