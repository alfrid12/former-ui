import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { mainFormFields, fieldForm } from '../form-configs';
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

  // TODO: convert these three separate arrays into one array with three objects in each element
  addedFieldFields: FormlyFieldConfig[][] = [];
  addedFieldFormGroups: FormGroup[] = [];
  addedFieldModels: any[] = [];

  ngOnInit() {
    this.mainFormFields = mainFormFields;
    this.mainFormFormGroup = new FormGroup({});
    this.mainFormModel = {
      formName: '',
      formId: ''
    };

    this.addedFieldFields = [];
    this.addedFieldFormGroups = [];
    this.addedFieldModels = [];
  }

  addNewField() {

    // February 23, 2020: Alex Fridman deep clones an array of objects in one line
    const newFieldForm: FormlyFieldConfig[] = fieldForm.map(field => ({ ...field }));

    // Add field configs, form group, and form model to corresponding arrays
    this.addedFieldFields.push(newFieldForm);
    this.addedFieldFormGroups.push(new FormGroup({}));
    this.addedFieldModels.push({});
  }

  submit() {

    // For each added field, convert from form model to formly field config
    const consolidatedFormFields = this.addedFieldModels.map(model => {
      return {
        key: model.fieldId,
        type: model.fieldType,
        templateOptions: {
          label: model.fieldLabel
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
