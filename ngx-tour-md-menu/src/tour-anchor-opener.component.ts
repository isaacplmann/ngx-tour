import { AfterViewInit, Component, OnChanges, SimpleChanges, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material';

@Component({
  selector: 'tourAnchorOpener',
  template: `<span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>`
})
export class TourAnchorOpenerComponent {
  @Input() menu: MatMenu = new MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true });

  @ViewChild(MatMenuTrigger) public trigger: MatMenuTrigger;
}
