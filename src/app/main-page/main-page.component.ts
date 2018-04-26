import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';
import { Router } from '@angular/router';
import { RouteAnimation }   from '../animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    RouteAnimation
]
})
export class MainPageComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  arr = ['.path-0','.path-1', '.path-2', '.path-3', '.path-4', '.path-5', '.path-6', '.path-7', '.path-8', '.path-9']

  constructor(
    private router: Router
  ) { }


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
        'stroke-dashoffset 2s ease';
      // Go!
      path.style.strokeDashoffset = '0';
      // setTimeout(()=>{path.style.strokeDashoffset = length; console.log('occur')}, 2000);
    }
  }
  transitionTest(path) {
    this.router.navigateByUrl(path);
  }
  ngAfterViewInit() {
    this.arr.forEach(d => this.load_sketch_animation(d));
  }
}
