import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logo: string = "assets/images/deep-transpw.png";

  ngOnInit(): void {

  }

  title = 'DeepFake';
}