import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServices } from '../../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() name: any = {};
  isEdited: boolean = false;
  @Input() showEdit: boolean;
  @Output() editEvent = new EventEmitter();

  formData: any = {};
  requireGivenName: boolean = false;
  requireFamilyName: boolean = false;
  constructor(private appSer: AppServices) { }

  ngOnInit() {
    this.initData();
    this.formData = {
      isEdit: false
    }
  }
  initData() {

    this.appSer.getJSON().subscribe(data => {
      this.name = data;
    }
      , error => console.log(error));

  }
  editData(event) {
    this.isEdited = !this.isEdited;
    this.formData.isEdit = true;
    this.editEvent.emit(this.formData);
    console.log('edit called');
  }
  saveData(event) {
    if (this.name.givenName.trim() !== '' && this.name.familyName.trim() !== '') {
      this.isEdited = !this.isEdited;
      this.formData.isEdit = false;
      this.editEvent.emit(this.formData);
    }
  }
  checkData(event, type) {
    let val = false;
    if (event.trim() === '')
      val = true;
    if (type === 'givenName')
      this.requireGivenName = val;
    if (type === 'familyName')
      this.requireFamilyName = val;
  }
}