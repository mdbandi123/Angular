import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [trigger('openClose', [
    state('open', style({
      height: '400px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.8,
      backgroundColor: 'green'
    })),
    transition('open => closed', [
      animate('1s ease-out')
    ]),
    transition('closed => open', [
      animate('1s')
    ])
  ])]



})
export class OpenCloseComponent implements OnInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
