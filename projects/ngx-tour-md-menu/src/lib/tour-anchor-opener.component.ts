import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';

@Component({
  selector: 'tourAnchorOpener',
  styles: [
    `
      :host {
        display: none;
      }
    `
  ],
  template: `
    <span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>
  `
})
export class TourAnchorOpenerComponent {
  @Input() menu: MatMenu = new MatMenu(undefined, undefined, {
    xPosition: 'after',
    yPosition: 'below',
    overlapTrigger: true,
    backdropClass: ''
  });

  @ViewChild(MatMenuTrigger, { static: false }) public trigger: MatMenuTrigger;
}
