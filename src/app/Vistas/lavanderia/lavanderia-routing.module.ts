import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavanderiaPage } from './lavanderia.page';

const routes: Routes = [
  {
    path: '',
    component: LavanderiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavanderiaPageRoutingModule {}
