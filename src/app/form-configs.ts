import { FormlyFieldConfig } from '@ngx-formly/core';

export const mainFormFields: FormlyFieldConfig[] = [{
    key: 'formId',
    type: 'input',
    templateOptions: {
        label: 'Form ID',
        placeholder: 'Enter form ID',
        required: true
    }
}, {
    key: 'formName',
    type: 'input',
    templateOptions: {
        label: 'Form Name',
        placeholder: 'Enter form name',
        required: true,
    }
}, {
    key: 'formSubmissionUrl',
    type: 'input',
    templateOptions: {
        label: 'Submission URL',
        placeholder: 'Enter submission URL',
        required: true
    }
}];

export const fieldFormFields: FormlyFieldConfig[] = [{
    key: 'fieldId',
    type: 'input',
    templateOptions: {
        label: 'Field ID',
        placeholder: 'Enter field ID',
        required: true
    }
}, {
    key: 'fieldLabel',
    type: 'input',
    templateOptions: {
        label: 'Field Label',
        placeholder: 'Enter field label',
        required: true
    }
}, {
    key: 'fieldType',
    type: 'radio',
    templateOptions: {
        label: 'Field Type',
        placeholder: 'asdf',
        description: 'jkl;',
        required: true,
        options: [
            { value: 'input', label: 'Text' },
            { value: 'checkbox', label: 'Checkbox' },
            { value: 'radio', label: 'Radio' },
            { value: 'select', label: 'Dropdown' },
        ]
    }
}];

export const optionFormFields: FormlyFieldConfig[] = [{
    key: 'optionLabel',
    type: 'input',
    templateOptions: {
        label: 'Option Label',
        placeholder: 'Enter option label',
        required: true
    }
}, {
    key: 'optionValue',
    type: 'input',
    templateOptions: {
        label: 'Option Value',
        placeholder: 'Enter option value',
        required: true
    }
}];


