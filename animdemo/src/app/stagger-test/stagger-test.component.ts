import { Component, OnInit } from '@angular/core';
import { transition, animate, trigger, query, stagger, style } from '@angular/animations';

@Component({
  selector: 'app-stagger-test',
  templateUrl: './stagger-test.component.html',
  styleUrls: ['./stagger-test.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('1s', style({ opacity: 1 }))
          ])
        ]),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class StaggerTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: any[] = [];
  //items2 = [0, 1, 2, 3, 4, 5];

  showItems() {
    this.items = [0, 1, 2, 3, 4, 5];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems;
  }
}
