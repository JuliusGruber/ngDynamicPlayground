import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from "@ng-dynamic-forms/core";

export const MY_FORM_GROUP_MODEL: DynamicFormModel = [

  new DynamicFormGroupModel({

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
  }),

  new DynamicFormGroupModel({

    id: "address",
    legend: "Address",
    group: [
      new DynamicInputModel({

        id: "street",
        label: "street"
      }),
      new DynamicInputModel({

        id: "zipCode",
        label: "Zip Code"
      })
    ]
  })
];
