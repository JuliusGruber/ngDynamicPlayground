import { Component, OnInit } from '@angular/core';
import { DynamicFormControlModel, DynamicFormModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { MY_FORM_MODEL } from "./Model/model";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.css']
})
export class BasicUsageComponent implements OnInit {
  formModel: DynamicFormControlModel[] = MY_FORM_MODEL as DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(public formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel )
  }

}
