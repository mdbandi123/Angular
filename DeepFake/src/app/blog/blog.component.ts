import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blog:string = "assets/images/blog/1.png";
  blog2:string = "assets/images/blog/2.png";
  blog3:string = "assets/images/blog/3.png";
  blog4:string = "assets/images/blog/4.png";

}
