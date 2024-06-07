import { animate, group, query, stagger, style, transition, trigger } from "@angular/animations";

export const fadeInOut = trigger('fade-in-out', [
  transition('* <=> *', [
    query(':enter', [
      style({opacity: 0, transform: 'scale(0.7)'}),
      stagger(100, [
        animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
      ])
    ], { optional: true }),
    query(':leave', [
      style({opacity: 1, transform: 'scale(1)'}),
      stagger(-100, [
        animate('1s ease-in', style({opacity: 0, transform: 'scale(0.7)'}))
      ])
    ], { optional: true }),
  ])
]);

// In default, each animation is excuted in sequence, and each animation is blocked by the previous animation.
// If we want all animations ro run in parallel, wrap them all into group() function.
export const fadeInOutInGroup = trigger('fade-in-out-p', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({opacity: 0, transform: 'scale(0.7)'}),
        stagger(100, [
          animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ backgroundColor: 'rgba(0 ,255, 0, 0.2)' }),
        animate('3s ease-in', style({backgroundColor: 'rgba(0, 0, 0, 0.1)'}))
      ], { optional: true })
    ]),
    group([
      query(':leave', [
        style({opacity: 1, transform: 'scale(1)'}),
        stagger(-100, [
          animate('1s ease-in', style({opacity: 0, transform: 'scale(0.7)'}))
        ])
      ], { optional: true }),
      query(':leave', [
        animate('500ms ease-in', style({backgroundColor: 'rgba(255, 0, 0, 0.2)'}))
      ], { optional: true })
    ])
  ])
]);

export const rotateAnimation = trigger('rotating', [
  transition('* <=> rotate', [
    query('h1', [
      style({ transform: 'rotateX(0deg)' }),
      animate('1s ease-in', style({ transform: 'rotateX(360deg)' }))
    ], { optional: true })
  ])
]);
