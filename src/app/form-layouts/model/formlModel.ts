import { DynamicFormModel, DynamicInputModel } from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL_LAYOUT: DynamicFormModel = [

  new DynamicInputModel({

    id: "gusInput1",
   /* label: "% Angular",*/
    maxLength: 42,
    placeholder: "Sample input"
  }),
  new DynamicInputModel({

    id: "gusInput2",
   /* label: "% Angular",*/
    maxLength: 42,
    placeholder: "Sample input"
  }),
  ]

export const MY_FORM_LAYOUT = {

  "gusInput1": {

    element: {
      label: "control-label"
    },
    grid: {
      control: "col-sm-2",
      /*label: "col-sm-9"*/
    }
  },
  "gusInput2": {

    element: {
      label: "control-label"
    },
    grid: {
      control: "col-sm-1",
      /*label: "col-sm-9"*/
    }
  }
};
