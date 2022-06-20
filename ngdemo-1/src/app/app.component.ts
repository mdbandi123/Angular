import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdemo-1';
  appName = "This is an interpolation"; // Interpolation
  
  clientName:string = "MD"; // Property Binding

  appliedCSSClass = "green"; // Style Binding
  notappliedCSSColor = false; 
  myColor = 'red';

  showData($event:any){ // Event Binding
    console.log("button is clicked");
    if($event)
    {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  getData(data:any)
  {
    console.warn(data);
  }

}
