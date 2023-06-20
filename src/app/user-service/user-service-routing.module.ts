import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserServicePage } from './user-service.page';

const routes: Routes = [
  {
    path: '',
    component: UserServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserServicePageRoutingModule {}
