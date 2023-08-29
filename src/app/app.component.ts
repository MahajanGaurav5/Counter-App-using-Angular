import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter-App using Angular';
  count=0;  //This value is used in to count and print the value on page

  //Function for counting
  counter(type:string)
  {
    type=='add'?this.count++:this.count--
  }
}
