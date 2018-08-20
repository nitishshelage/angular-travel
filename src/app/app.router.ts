import {Routes} from '@angular/router'
import {PersonalComponent} from './personal/personal.component';
import {ReviewComponent} from './review/review.component';
import {AcknowledgementComponent} from './acknowledgement/acknowledgement.component';

export const appRoutes: Routes = [
    { path: 'acknowledgement',      component: AcknowledgementComponent },
    {
      path: 'review',
      component: ReviewComponent
    },
    { path: '',
     component: PersonalComponent,
      pathMatch: 'full'
    }
  ];