import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

export const slideUpAnimation = trigger('slideUpAnimation', [
  transition(':enter', [
    style({ top: '100%' }), animate('300ms', style({ top: 0, }))]
  ),
  transition(':leave',
    [style({ top: 0 }), animate('300ms', style({ top: '120%' }))]
  ),
  transition('* => close',
    [style({ top: 0 }), animate('300ms', style({ top: '120%' }))]
  )
]);

const slideRightAnimation = [
  query(':enter, :leave', [
    style({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      margin: 0,
      padding: 0
    })
  ]),
  query(':enter', [
    style({ left: '100%' })
  ]),
  group([
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%' }))
    ]),
    query(':leave', [
      animate('300ms ease-out', style({ left: '-100%' }))
    ])
  ]),
];

const sideLeftAnimation = [
  query(':enter, :leave', [
    style({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  group([
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%' }))
    ]),
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%' }))
    ])
  ]),
];

export const slideLeftRightAnimations =
  trigger('routeAnimations', [
    transition('register => login', sideLeftAnimation),
    transition('login => register', slideRightAnimation),
    transition('login => home', slideRightAnimation),
    transition('register => home', slideRightAnimation),
  ]);