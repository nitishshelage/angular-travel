import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string;
  @Input() btnClass: string;
  @Input() wrapperClass: string;
  @Input() iconClass: string;
  @Input() showIcon: boolean;
  @Input() isDisabled: boolean;
  @Output() clickEvent = new EventEmitter(); 
  constructor() {
    this.showIcon = false;
    this.isDisabled = false;
   }
  ngOnInit() {
  }
  buttonClick(){
      this.clickEvent.emit();
  }
}