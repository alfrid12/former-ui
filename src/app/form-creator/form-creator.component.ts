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

  mainForm: any;
  addedFields: any[];

  ngOnInit() {
    this.mainForm = {
      formFields: mainFormFields,
      formGroup: new FormGroup({}),
      model: {}
    };

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

    // Deep clone to avoid referencing issues
    const newOptionFormFields: FormlyFieldConfig[] = optionFormFields.map(field => ({ ...field }));

    addedField.addedOptions.push({
      formFields: newOptionFormFields,
      formGroup: new FormGroup({}),
      model: {}
    });
  }


  submit() {

    // For each added field, convert from form model to formly field config
    const consolidatedFormFields = this.addedFields.map(field => {

      // Create FormlyFieldConfig from form model for field
      const fieldConfig: FormlyFieldConfig = {
        key: field.model.fieldId,
        type: field.model.fieldType,
        templateOptions: {
          label: field.model.fieldLabel
        }
      };

      // If field is radio or select, put options inside of templateOptions.options
      if (field.model.fieldType === 'radio' || field.model.fieldType === 'select') {
        fieldConfig.templateOptions.options = field.addedOptions.map(option => ({
          value: option.model.optionValue,
          label: option.model.optionLabel
        }));
      }

      return fieldConfig;
    });

    // Combine form attributes and form fields into one object
    const newForm = {
      formId: this.mainForm.model.formId,
      formName: this.mainForm.model.formName,
      formSubmissionUrl: this.mainForm.model.formSubmissionUrl,
      formFields: consolidatedFormFields
    };

    // Send form object to API for saving
    this.formerApiService.submitNewForm(newForm).subscribe(console.log, console.log);
  }
}
