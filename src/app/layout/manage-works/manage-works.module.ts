import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageWorksRoutingModule } from './manage-works-routing.module';
import { ManageWorksComponent } from './manage-works/manage-works.component';

@NgModule({
  imports: [
    CommonModule,
    ManageWorksRoutingModule
  ],
  declarations: [ManageWorksComponent]
})
export class ManageWorksModule { }
