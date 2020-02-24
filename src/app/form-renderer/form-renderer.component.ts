import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormerApiService } from '../services/former-api.service';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})
export class FormRendererComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formerApiService: FormerApiService) { }

  // TODO: render actual form in html

  ngOnInit() {
    const formId = this.route.snapshot.paramMap.get('formId');
    this.formerApiService.getFormByFormId(formId).subscribe(console.log, console.log);
  }

}
