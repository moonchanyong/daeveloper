import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr = ['.path-0','.path-1', '.path-2', '.path-3', '.path-4', '.path-5', '.path-6', '.path-7', '.path-8']
  load_sketch_animation = function (s) {
    var path = document.querySelector(s);
    if(path){
      var length = path.getTotalLength();
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 2s ease-in-out';
      // Go!
      path.style.strokeDashoffset = '0';
    }
  }
  ngAfterViewInit() {
    this.arr.forEach(d => this.load_sketch_animation(d));
  }
}
