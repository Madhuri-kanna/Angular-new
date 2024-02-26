import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  n = 'Madhu';
  img = 'https://images.samsung.com/in/smartphones/galaxy-s24/buy/product_color_yellow.png?imwidth=480'
  title = 'Samsung S24';
  price = '79,999'; c=0
  isNotAvailable = false;
  fun() 
  {
    alert("button clicked")
  }
  Incr()
  {

  }
}
