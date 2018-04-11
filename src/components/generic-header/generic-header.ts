import { Component } from '@angular/core';

/**
 * Generated class for the GenericHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'generic-header',
  templateUrl: 'generic-header.html'
})
export class GenericHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello GenericHeaderComponent Component');
    this.text = 'Hello World';
  }

}
