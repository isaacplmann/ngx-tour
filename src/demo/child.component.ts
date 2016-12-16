import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child',
  template: `<p>This is the <strong tourAnchor="first">first</strong> child component</p>`,
})
export class ChildComponent {
}
