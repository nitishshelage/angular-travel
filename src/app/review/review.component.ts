import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  disableBtn: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  route(){
    this.router.navigate(['/acknowledgement']);
 }
 updateData(event){
   if(event.isEdit){
       this.disableBtn = true;
   } else {
      this.disableBtn = false;
   }
 }
}