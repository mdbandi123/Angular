import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  imageUrl = "assets/images/Seal_of_Holy_Angel_University.png"; //image interpo

  //2 way data binding
  studName="";
  prelim=0;
  midterm=0
  final=0;

  isLogIn: boolean = true;
  isLogOut: boolean = false;

  list = [1,2,3,4,5];

  studentArr: any[] = [
    {"id":1,"name":"student1"},
    {"id":2,"name":"student2"},
    {"id":3,"name":"student3"},
  ];
  trackByData(index:number,studentArr:any): number
  {
    return studentArr.id;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

  

}
