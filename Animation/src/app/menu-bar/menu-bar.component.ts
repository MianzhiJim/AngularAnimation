import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  @Output() menuClose = new EventEmitter<void>();
  menuItems = [
    { name: 'Home', link: '/home'},
    { name: 'Gallery', link: '/gallery'},
    { name: 'Profile', link: '/home'},
    { name: 'More', link: '/home'},
  ];
}
