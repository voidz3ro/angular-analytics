import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Analytics';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       (<any>window).ga('set', 'page', event.urlAfterRedirects); // set to new route url
      //  console.log(`page = ${event.urlAfterRedirects}`);
       (<any>window).ga('send', 'pageview'); // send it
     }
   });
 }

 sendEvent = () => {
  (<any>window).ga('send', 'event', {
    eventCategory: 'events-random',
    eventLabel: 'event-random',
    eventAction: 'Random action',
    eventValue: 10
  });
  }

}

