import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';

import { AppComponent } from './app.component';

import { DynamicFormsNGBootstrapUIModule } from "@ng-dynamic-forms/ui-ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";





import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BasicUsageComponent } from './basic-usage/basic-usage.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { DynamicFormService } from "@ng-dynamic-forms/core";
import { FormArraysComponent } from './form-arrays/form-arrays.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent,
    FormGroupComponent,
    FormArraysComponent,
    FormLayoutsComponent,
    BootstrapTestComponent,


  ],
  imports: [
    BrowserModule,
    DynamicFormsNGBootstrapUIModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],


  bootstrap: [AppComponent],

})
export class AppModule {
}
