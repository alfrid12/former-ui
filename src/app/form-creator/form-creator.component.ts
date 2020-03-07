import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { mainFormFields, fieldFormFields, optionFormFields } from '../form-configs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormerApiService } from '../services/former-api.service';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  constructor(private formerApiService: FormerApiService) { }

  // TODO: move below three lines into one object with three elements
  mainFormFields: FormlyFieldConfig[];
  mainFormFormGroup: FormGroup;
  mainFormModel: any;

  addedFields: any[];

  ngOnInit() {
    this.mainFormFields = mainFormFields;
    this.mainFormFormGroup = new FormGroup({});
    this.mainFormModel = {};

    this.addedFields = [];
  }

  addNewField() {

    // Deep clone to avoid referencing issues
    const newFieldFormFields: FormlyFieldConfig[] = fieldFormFields.map(field => ({ ...field }));

    // Add field configs, form group, and form model to array
    this.addedFields.push({
      formFields: newFieldFormFields,
      formGroup: new FormGroup({}),
      model: {},
      addedOptions: []
    });
  }

  addNewOption(addedField) {
    const newOptionFormFields: FormlyFieldConfig[] = optionFormFields.map(field => ({ ...field }));

    addedField.addedOptions.push({
      formFields: newOptionFormFields,
      formGroup: new FormGroup({}),
      model: {}
    });
  }

  // TODO: add parsing for radio/dropdown options
  submit() {

    // For each added field, convert from form model to formly field config
    const consolidatedFormFields = this.addedFields.map(field => {
      return {
        key: field.model.fieldId,
        type: field.model.fieldType,
        templateOptions: {
          label: field.model.fieldLabel
        }
      };
    });

    // Combine form attributes and form fields into one object
    const newForm = {
      formId: this.mainFormModel.formId,
      formName: this.mainFormModel.formName,
      formSubmissionUrl: this.mainFormModel.formSubmissionUrl,
      formFields: consolidatedFormFields
    };

    // Send form object to API for saving
    this.formerApiService.submitNewForm(newForm).subscribe(console.log, console.log);
  }
}
