import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  mydata = [
    {
    name:'Alauddin',
    age:'40',
    address:'Paharpur'
  },
  {
    name:'Romjan',
    age:'30',
    address:'Patrasayer'
  },
  {
    name:'Najir',
    age:'25',
    address:'Hyderabad'
  }
]
}
