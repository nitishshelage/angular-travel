import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import {ButtonComponent} from './button/button.component';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {FormsModule} from '@angular/forms'
@NgModule({
    imports: [CommonModule, ButtonsModule.forRoot(), FormsModule ],
    declarations: [ ContactComponent, ButtonComponent ],
    exports: [ContactComponent, ButtonComponent]
  })
  export class ShareModule { }