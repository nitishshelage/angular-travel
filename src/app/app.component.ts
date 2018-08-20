import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, NavigationStart, Event, RoutesRecognized, NavigationError, NavigationCancel } from "@angular/router"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  progressVal = 10;
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events.subscribe((event : Event) => {
      if(event instanceof NavigationStart) {
         //An event triggered when navigation starts.
      }else if(event instanceof RoutesRecognized) {
         //An event triggered when the Router parses the URL and the routes are recognized.
      }else if(event instanceof NavigationEnd) {
         //An event triggered when navigation ends successfully.
         switch(event.url){
           case '/':
           this.progressVal = 30;
           break;
           case '/review':
           this.progressVal = 70;
           break;
           case '/acknowledgement':
           this.progressVal = 100;
           break;
           default:
           break;
         }
      }else if(event instanceof NavigationCancel) {
         //An event triggered when navigation is canceled. This is due to a Route Guard returning false during navigation.
      }else if(event instanceof NavigationError) {
         //An event triggered when navigation fails due to an unexpected error.
      }
 });
  }
}
