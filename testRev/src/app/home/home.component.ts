import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: any;
  numbers: any[] = [];
  sum: number = 0;
  filtered = 0;

  filteredNumbers: any[] = [];


  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.date = this.myservice.showDate();
    const numbers$ = of(1, 2, 3, 4, 5, 11, 23);


    const filterFn = filter((num: number) => num > 5);
    const filteredNumbers$ = filterFn(numbers$);
    const observerFilter = (num: number) => {
      this.filteredNumbers.push(num); this.filtered += num
    };
    filteredNumbers$.subscribe(observerFilter);

    numbers$.subscribe(
      (num: number) => { this.numbers.push(num); this.sum = this.sum + num }
    );
  }

}
