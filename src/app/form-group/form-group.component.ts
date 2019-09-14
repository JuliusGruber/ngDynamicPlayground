import { Component, OnInit } from '@angular/core';
import {
  DynamicFormControlModel,
  DynamicFormGroupModel,
  DynamicFormService,
  DynamicInputModel
} from "@ng-dynamic-forms/core";
import { FormGroup } from "@angular/forms";
import { MY_FORM_GROUP_MODEL } from "./model/formGroupModel";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  private formModel: DynamicFormControlModel[] = MY_FORM_GROUP_MODEL as  DynamicFormControlModel[];
  private formGroup: FormGroup;

  constructor(public formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formService.addFormGroupControl(this.formGroup, this.formModel, new DynamicFormGroupModel({

      id: "fullName",
      legend: "Name",
      group: [
        new DynamicInputModel({

          id: "firstName",
          label: "First Name"
        }),
        new DynamicInputModel({

          id: "lastName",
          label: "Last Name"
        })
      ]
    }))

  }

}
