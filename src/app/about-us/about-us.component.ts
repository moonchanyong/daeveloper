import { Component, OnInit, HostBinding } from '@angular/core';
import { Http } from '@angular/http';
import { RouteAnimation }   from '../animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    RouteAnimation
]
})
export class AboutUsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(
    private http:Http
  ) { }

    ngOnInit() {

    }


}
