import { FormModel } from "./form-model";

export class FormDropdown extends FormModel<string> {
    override controlType = "dropdown";
}
