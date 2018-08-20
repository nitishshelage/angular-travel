import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.css']
})
export class AcknowledgementComponent implements OnInit {
  date = new Date();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  route(){
    this.router.navigate(['/']);
 }
}