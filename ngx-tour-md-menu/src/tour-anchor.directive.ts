import { Directive, ElementRef, InjectionToken, Input, OnDestroy, OnInit, Optional, Self, ViewContainerRef, Inject } from '@angular/core';
import {
  Directionality,
  MdMenu,
  MdMenuItem,
  MdMenuTrigger,
  Overlay,
  OverlayRef,
  RepositionScrollStrategy,
  ScrollStrategy,
} from '@angular/material';
import { IStepOption, TourAnchorDirective, TourState, TourService } from 'ngx-tour-core';
import withinviewport from 'withinviewport';

import { TourStepTemplateService } from './tour-step-template.service';

export const MD_MENU_SCROLL_STRATEGY =
  new InjectionToken<() => ScrollStrategy>('md-menu-scroll-strategy');

/** @docs-private */
export function MD_MENU_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):
  () => RepositionScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/** @docs-private */
export const MD_MENU_SCROLL_STRATEGY_PROVIDER = {
  provide: MD_MENU_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MD_MENU_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

@Directive({
  providers: [MD_MENU_SCROLL_STRATEGY_PROVIDER],
  selector: '[tourAnchor]',
})
export class TourAnchorMdMenuDirective extends MdMenuTrigger implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(
    private _superoverlay: Overlay, private _superelement: ElementRef, private _superviewContainerRef: ViewContainerRef,
    @Optional() @Inject(MD_MENU_SCROLL_STRATEGY) private _superscrollStrategy: any,
    @Optional() private _superparentMenu: MdMenu,
    @Optional() @Self() private _supermenuItemInstance: MdMenuItem,
    @Optional() private _superdir: Directionality,
    private tourService: TourService, private tourStepTemplate: TourStepTemplateService,
  ) {
    super(_superoverlay, _superelement, _superviewContainerRef, _superscrollStrategy, _superparentMenu, _supermenuItemInstance, _superdir);
    this.menu = new MdMenu(undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true });
    this.element = _superelement;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    this.tourStepTemplate.templateComponent.step = step;
    // Ignore step.placement
    this.menu = this.tourStepTemplate.templateComponent.tourStep;
    super.ngAfterViewInit();
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }
    this.openMenu();
    if ((<any>this)._overlayRef) {
      (<OverlayRef>(<any>this)._overlayRef).backdropClick().subscribe(event => {
        if (this.tourService.getStatus() !== TourState.OFF) {
          this.tourService.end();
        }
      });
    }
  }

  public hideTourStep(): void {
    this.closeMenu();
  }
}
