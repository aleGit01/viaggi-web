import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './modules/reservation/components/edit/edit.component';
import { OpenComponent } from './modules/reservation/components/open/open.component';

const routes: Routes = [
  { path: '', redirectTo: '/reservation', pathMatch: 'full' },
  { path: 'reservation', component: OpenComponent },
  { path: 'reservationEdit/:reservationNumber', component: EditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
