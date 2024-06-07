import { Component } from '@angular/core';
import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { fadeInOut, fadeInOutInGroup, rotateAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // basic implementations of angular animation
    trigger('openClose', [
      state('closed', style({ transform: 'translateX(-120%)' })),
      state('open', style({ transform: 'translateX(0)' })),
      transition('closed <=> open', [animate('0.5s ease-in')]),
    ]),

    // using :enter & :leave. Instead of hiding a component after animation, we can remove the element instead.
    trigger('openClose2', [
      transition(':enter', [
        style({ transform: 'translateX(-120%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(-120%)' }))
      ]),
    ]),

    // using keyframes() to add more steps to animations
    trigger('keyframes', [
      transition(':enter', [
        animate('1s ease-in', keyframes([
          style({ transform: 'translateX(-120%) scale(0.5)', offset: 0 }),
          style({ transform: 'translateX(240%) scale(0.5)', offset: 0.1 }),
          style({ transform: 'translateX(240%) scale(0.65) rotate(360deg)', offset: 0.8 }),
          style({ transform: 'translateX(0%) scale(1) rotate(360deg)', offset: 1 }),
        ]))
      ]),
      transition(':leave', [
        animate('1s ease-in', keyframes([
          style({ transform: 'translateX(0%) scale(1) rotateY(360deg)', offset: 0 }),
          style({ transform: 'translateX(240%) scale(1.5) rotateY(360deg)', offset: 0.1 }),
          style({ transform: 'translateX(240%) scale(0.8)', offset: 0.8 }),
          style({ transform: 'translateX(-120%) scale(0.5)', offset: 1 }),
        ]))
      ]),
    ]),

    // reusable animation
    fadeInOut,
    fadeInOutInGroup,
    rotateAnimation,
  ]
})
export class AppComponent {
  title = 'Animation';
  menuState: 'open' | 'closed' = 'closed';
  menuOpen = false;
  rotateState = '';
  images: string[] = [];

  // 图片换成自己的图片就好
  assets = [
    '../assets/IMG_0513.jpg',
    '../assets/IMG_2177.jpg',
    '../assets/IMG_0128.PNG',
    '../assets/IMG_1072.JPG',
    '../assets/IMG_2473.PNG',
  ];

  addImage() {
    this.images = [...this.assets];
  }

  removeImage() {
    this.images = [];
  }

  rotate() {
    this.rotateState = 'rotate';
  }
}
