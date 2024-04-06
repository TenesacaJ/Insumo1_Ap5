import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartoPage } from './cuarto.page';

const routes: Routes = [
  {
    path: '',
    component: CuartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartoPageRoutingModule {}
