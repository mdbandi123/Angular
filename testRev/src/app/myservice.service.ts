import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  showDate() {
    let ndate = new Date();
    return ndate;
  }

  constructor() { }
}
