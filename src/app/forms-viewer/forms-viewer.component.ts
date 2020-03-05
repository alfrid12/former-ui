import { Component, OnInit } from '@angular/core';
import { FormerApiService } from '../services/former-api.service';

@Component({
  selector: 'app-forms-viewer',
  templateUrl: './forms-viewer.component.html',
  styleUrls: ['./forms-viewer.component.css']
})
export class FormsViewerComponent implements OnInit {

  constructor(private formerApiService: FormerApiService) { }

  forms: any[];

  ngOnInit() {
    this.formerApiService.getAllForms().subscribe(forms => this.forms = forms, console.log);
  }

}
