import {
  animate,
  AnimationEntryMetadata,
  state,
  style,
  transition,
  trigger,
  group
} from '@angular/core';

// Component transition animations
export const RouteAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(-1000px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)'
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition(':leave',[
      style({ transform: 'translateX(0)', opacity: 1}),
      group([
        animate('0.5s 0.3s ease', style({
          transform: 'translateX(-1000px)'
        })),
        animate('0.5s 0.3s ease', style({
          opacity: 0
        }))
   ])
 ])
]);
