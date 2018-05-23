import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageWorksComponent } from './manage-works/manage-works.component';

const routes: Routes = [
  {path:'',component:ManageWorksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageWorksRoutingModule { }
