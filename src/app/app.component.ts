import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /** Some thoughts:
   *
   * When the page first loads, we need to display a base form:
   *  - form ID
   *  - form name
   *  - submission POST URL
   *
   * If the user clicks "Add Field", we basically need to add and track a new form in an array of forms
   *
   * When the user clicks "Submit", we need to turn the base form and the array of forms into one single form
   *  - this form is what gets saved in the database
   */

  // Menu items for navbar
  menuItems: MenuItem[];

  ngOnInit() {

    // https://www.primefaces.org/primeng/#/menubar
    this.menuItems = [{
      label: 'New Form',
      icon: 'fa fa-file',
      routerLink: '/create-form'
    }, {
      label: 'Find a Form',
      icon: 'fa fa-table',
      routerLink: '/forms'
    }, {
      label: 'Find a Form Submission',
      icon: 'fa fa-question'
    }];
  }
}
