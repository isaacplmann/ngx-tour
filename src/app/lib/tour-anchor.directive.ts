import { IStepOption } from './tour.service';

export interface TourAnchorDirective {
  showTourStep(step: IStepOption): void;
  hideTourStep(): void;
}
