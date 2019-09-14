import {
  DynamicCheckboxModel,
  DynamicFormArrayModel,
  DynamicFormModel,
  DynamicInputModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_ARRAY_MODEL: DynamicFormModel = [

  new DynamicFormArrayModel({
    id: "myFormArray",
    initialCount: 0,
    groupFactory: () => {
      return [
        new DynamicCheckboxModel({

          id: "sampleCheckbox",
          label: "I do agree"
        })
      ];
    }
  })
];
