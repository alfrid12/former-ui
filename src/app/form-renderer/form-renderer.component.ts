import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormerApiService } from '../services/former-api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})
export class FormRendererComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formerApiService: FormerApiService) { }

  form: any;

  formGroup: FormGroup;
  formModel: any;

  ngOnInit() {

    this.formGroup = new FormGroup({});
    this.formModel = {};

    const formId = this.route.snapshot.paramMap.get('formId');
    this.formerApiService.getFormByFormId(formId).subscribe(form => {
      this.form = form;
      console.log('Form object:');
      console.log(form);
    }, console.log);
  }


  submit() {
    console.log('Form model: ');
    console.log(this.formModel);
  }

}
