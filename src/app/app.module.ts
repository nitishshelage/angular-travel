import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonalComponent } from './personal/personal.component';
import { ReviewComponent } from './review/review.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import {AppServices} from './app.service';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ShareModule } from './shared/shared.module';
import {RouterModule} from '@angular/router';
import { MomentModule } from 'angular2-moment';
import {appRoutes} from './app.router';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ProgressbarModule.forRoot(), ShareModule,
    RouterModule.forRoot(
      appRoutes
    ), MomentModule ],
  declarations: [ AppComponent, HelloComponent, PersonalComponent, ReviewComponent, AcknowledgementComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppServices]
})
export class AppModule { }
