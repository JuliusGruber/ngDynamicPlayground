import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from "@ng-dynamic-forms/core";
import { MY_FORM_LAYOUT, MY_FORM_MODEL_LAYOUT } from "./model/formlModel";

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.css']
})
export class FormLayoutsComponent implements OnInit {
  formModel: DynamicFormControlModel[] = MY_FORM_MODEL_LAYOUT as DynamicFormControlModel[];
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = MY_FORM_LAYOUT;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
