import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanoPage } from './bano.page';

const routes: Routes = [
  {
    path: '',
    component: BanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanoPageRoutingModule {}
