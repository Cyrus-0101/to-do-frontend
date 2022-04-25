import { FormModel } from "./form-model";

export class FormTextbox extends FormModel<string> {
    override controlType = "textbox";
}
