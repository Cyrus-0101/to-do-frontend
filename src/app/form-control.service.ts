import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from './form-model';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(forms: FormModel<string>[]) {
    let group: any = {};

    forms.forEach(form => {
      group[form.key] = form.required ? new FormControl(form.value || "", Validators.required) : new FormControl(form.value || "");
    });
    return new FormGroup(group);
  }
}
