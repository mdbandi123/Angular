import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.css']
})
export class Article2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blog2:string = "assets/images/blog/2.png";

}