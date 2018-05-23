import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignWorksRoutingModule } from './assign-works-routing.module';
import { AssignWorksComponent } from './assign-works/assign-works.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { TagInputModule } from 'ngx-chips';
import { UiSwitchModule } from 'angular2-ui-switch';
import { NgxGalleryModule } from 'ngx-gallery';
@NgModule({
  imports: [
    CommonModule,
    AssignWorksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    NgbModule.forRoot(),
    TagInputModule,
    UiSwitchModule,
    NgxGalleryModule
  ],
  declarations: [AssignWorksComponent]
})
export class AssignWorksModule { }
