// import { TourService, IStepOption, TourState } from './tour.service';
// import { RouterModule } from '@angular/router';
// import { HotkeyModule } from 'angular2-hotkeys';
// import { CommonModule } from '@angular/common';
// import { TestBed, inject, async } from '@angular/core/testing';

// describe('TourService', () => {

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [CommonModule, HotkeyModule, RouterModule],
//       providers: [TourService],
//     });
//   });

//   describe('initialize()', () => {
//     let steps: IStepOption;
//     beforeEach(() => {
//       steps = [{
//         anchorId: 'start.tour',
//         content: 'Welcome to the Ng2-Tour tour!',
//         placement: 'below',
//         title: 'Welcome',
//       }, {
//         anchorId: 'angular-ui-tour',
//         content: 'Thanks to angular-ui-tour for the inspiration for the library',
//         route: '',
//         title: 'angular-ui-tour',
//       }, {
//         anchorId: 'installation',
//         content: 'First, install the library...',
//         title: 'Installation',
//       }];
//     });

//     it(
//       'should do nothing if no steps passed',
//       inject([TourService], (tourService) => {
//         expect(tourService.steps).toBeUndefined();
//         tourService.initialize(undefined);
//         expect(tourService.steps).toBeUndefined();
//         tourService.initialize([]);
//         expect(tourService.steps).toBeUndefined();
//         tourService.initialize({ objects: 'are ignored' });
//         expect(tourService.steps).toBeUndefined();
//       }),
//     );
//     it(
//       'should save steps to the tour',
//       async(inject([TourService], (tourService) => {
//         tourService.initialize$.first().subscribe((event) => {
//           expect(event).toBe(steps);
//         });
//         tourService.initialize(steps);
//         expect(tourService.steps).toBe(steps);
//         expect(tourService.status).toBe(TourState.OFF);
//       })),
//     );
//     it(
//       'should use default values for steps',
//       inject([TourService], (tourService) => {
//         const stepDefaults = {
//           placement: 'bottom',
//           route: 'blue',
//         };
//         tourService.initialize$.first().subscribe((event) => {
//           expect(event).toBe(steps);
//         });
//         tourService.initialize(steps, stepDefaults);
//         expect(tourService.steps).toBe(steps);
//         expect(tourService.status).toBe(TourState.OFF);
//       }),
//     );
//   });
// });
