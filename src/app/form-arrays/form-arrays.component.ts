import { Component, OnInit } from '@angular/core';
import { DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { MY_FORM_ARRAY_MODEL } from "./model/form-array-model";
import { FormArray, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.css']
})
export class FormArraysComponent implements OnInit {
  formModel=  MY_FORM_ARRAY_MODEL as DynamicFormControlModel[];
  formGroup: FormGroup;
  private formArrayControl : FormArray;
  private formArrayModel: DynamicFormArrayModel;
  private myArray: Array<number> = new Array<number>();

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {

    this.myArray.push(1);
    this.myArray.push(2);

    this.formGroup = this.formService.createFormGroup(this.formModel);

    this.formArrayControl = this.formGroup.get("myFormArray") as FormArray;
    this.formArrayModel = this.formService.findById("myFormArray", this.formModel) as DynamicFormArrayModel;

    for(let i = 0; i < this.myArray.length; i++){
      this.addItem();
    }
  }

  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  }

  clear() {
    this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
  }

  onClick() {

  }

  removeItem(context, index) {
    this.formService.removeFormArrayGroup(index, this.formArrayControl, context);
  }

  insertItem(context: any, index: any) {
    this.formService.insertFormArrayGroup(index, this.formArrayControl, context);
  }
}
