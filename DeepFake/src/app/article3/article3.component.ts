import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article3',
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.css']
})
export class Article3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blog3:string = "assets/images/blog/3.png";

}
