import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormerApiService {

  constructor(private http: HttpClient) { }

  submitNewForm(newForm) {
    return this.http.post<any>(this.prependBaseUrl('/forms'), newForm);
  }

  getFormByFormId(formId) {
    return this.http.get<any>(this.prependBaseUrl('/forms/' + formId));
  }

  // Change me eventually
  getAllForms() {
    return this.http.get<any>(this.prependBaseUrl('/collections/forms'));
  }

  private prependBaseUrl(urlSuffix) {
    return 'http://localhost:3000' + urlSuffix;
  }
}
