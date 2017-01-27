import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { TourAnchorDirective } from './tour-anchor.directive';
import { IStepOption } from './tour.service';
import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { mergeStatic } from 'rxjs/operator/merge';
import { map } from 'rxjs/operator/map';

export interface IStepOption {
  stepId?: string;
  anchorId?: string;
  title?: string;
  content?: string;
  route?: string | UrlSegment[];
  nextStep?: number | string;
  prevStep?: number | string;
  placement?: 'above' | 'below' | 'after' | 'before' | 'left' | 'right';
  preventScrolling?: boolean;
}

export enum TourState {
  OFF,
  ON,
  PAUSED,
}

@Injectable()
export class TourService {

  public stepShow$: Subject<IStepOption> = new Subject();
  public stepHide$: Subject<IStepOption> = new Subject();
  public initialize$: Subject<IStepOption[]> = new Subject();
  public start$: Subject<IStepOption> = new Subject();
  public end$: Subject<any> = new Subject();
  public pause$: Subject<IStepOption> = new Subject();
  public resume$: Subject<IStepOption> = new Subject();
  public anchorRegister$: Subject<string> = new Subject();
  public anchorUnregister$: Subject<string> = new Subject();
  public events$: Observable<{ name: string, value: any }> = mergeStatic(
    map.bind(this.stepShow$)(value => ({ name: 'stepShow', value })),
    map.bind(this.stepHide$)(value => ({ name: 'stepHide', value })),
    map.bind(this.initialize$)(value => ({ name: 'initialize', value })),
    map.bind(this.start$)(value => ({ name: 'start', value })),
    map.bind(this.end$)(value => ({ name: 'end', value })),
    map.bind(this.pause$)(value => ({ name: 'pause', value })),
    map.bind(this.resume$)(value => ({ name: 'resume', value })),
    map.bind(this.anchorRegister$)(value => ({ name: 'anchorRegister', value })),
    map.bind(this.anchorUnregister$)(value => ({ name: 'anchorUnregister', value })),
  );

  public steps: IStepOption[];
  public currentStep: IStepOption;

  public anchors: { [anchorId: string]: TourAnchorDirective } = {};
  private status: TourState = TourState.OFF;
  private hotkeys: Hotkey[] = [new Hotkey(
    'esc',
    event => {
      this.end();
      return true;
    },
  ), new Hotkey(
    'right',
    event => {
      if (this.hasNext(this.currentStep)) {
        this.next();
      }
      return true;
    },
  ), new Hotkey(
    'left',
    event => {
      if (this.hasPrev(this.currentStep)) {
        this.prev();
      }
      return true;
    },
  )];

  constructor(private router: Router, private hotkeyService: HotkeysService) { }

  public initialize(steps: IStepOption[], stepDefaults?: IStepOption): void {
    if (steps && steps.length > 0) {
      this.steps = steps.map(step => Object.assign({}, stepDefaults, step));
      this.initialize$.next(steps);
      this.status = TourState.OFF;
    }
  }

  public start(): void {
    this.startAt(0);
  }

  public startAt(stepId: number | string): void {
    this.goToStep(this.loadStep(stepId));
    this.start$.next();
    this.status = TourState.ON;
    this.setHotkeys();
  }

  public end(): void {
    this.hideStep(this.currentStep);
    this.currentStep = undefined;
    this.end$.next();
    this.status = TourState.OFF;
    this.removeHotkeys();
  }

  public pause(): void {
    this.hideStep(this.currentStep);
    this.pause$.next();
    this.status = TourState.PAUSED;
    this.setHotkeys();
  }

  public resume(): void {
    this.showStep(this.currentStep);
    this.resume$.next();
    this.status = TourState.ON;
    this.removeHotkeys();
  }

  public toggle(pause?: boolean): void {
    if (pause) {
      if (this.currentStep) {
        this.pause();
      } else {
        this.resume();
      }
    } else {
      if (this.currentStep) {
        this.end();
      } else {
        this.start();
      }
    }
  }

  public next(): void {
    this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
  }

  public hasNext(step: IStepOption): boolean {
    return step.nextStep !== undefined || this.steps.indexOf(step) < this.steps.length - 1;
  }

  public prev(): void {
    this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
  }

  public hasPrev(step: IStepOption): boolean {
    return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
  }

  public goto(stepId: number | string): void {
    this.goToStep(this.loadStep(stepId));
  }

  public register(anchorId: string, anchor: TourAnchorDirective): void {
    if (this.anchors[anchorId]) {
      throw 'anchorId ' + anchorId + ' already registered!';
    }
    this.anchors[anchorId] = anchor;
    this.anchorRegister$.next(anchorId);
  }

  public unregister(anchorId: string): void {
    delete this.anchors[anchorId];
    this.anchorUnregister$.next(anchorId);
  }

  /**
   * Configures hot keys for controlling the tour with the keyboard
   */
  private setHotkeys(): void {
    this.hotkeyService.add(this.hotkeys);
  }

  private removeHotkeys(): void {
    this.hotkeyService.remove(this.hotkeys);
  }

  private goToStep(step: IStepOption): void {
    if (!step) {
      this.end();
      return;
    }
    let navigatePromise: Promise<boolean> = new Promise(resolve => resolve(true));
    if (step.route !== undefined && typeof (step.route) === 'string') {
      navigatePromise = this.router.navigateByUrl(step.route);
    } else if (step.route && Array.isArray(step.route)) {
      navigatePromise = this.router.navigate(step.route);
    }
    navigatePromise.then(navigated => {
      if (navigated !== false) {
        this.setCurrentStep(step);
      }
    });
  }

  private loadStep(stepId: number | string): IStepOption {
    if (typeof (stepId) === 'number') {
      return this.steps[stepId];
    } else {
      return this.steps.find(step => step.stepId === stepId);
    }
  }

  private setCurrentStep(step: IStepOption): void {
    if (this.currentStep) {
      this.hideStep(this.currentStep);
    }
    this.currentStep = step;
    this.showStep(this.currentStep);
  }

  private showStep(step: IStepOption): void {
    const anchor = this.anchors[step.anchorId];
    if (!anchor) {
      this.end();
      return;
    }
    anchor.showTourStep(step);
    this.stepShow$.next(step);
  }

  private hideStep(step: IStepOption): void {
    const anchor = this.anchors[step.anchorId];
    if (!anchor) {
      return;
    }
    anchor.hideTourStep();
    this.stepHide$.next(step);
  }
}
