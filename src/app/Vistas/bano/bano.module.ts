import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanoPageRoutingModule } from './bano-routing.module';

import { BanoPage } from './bano.page';
import { NavModule } from 'src/app/Componente/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanoPageRoutingModule,
    NavModule
  ],
  declarations: [BanoPage]
})
export class BanoPageModule {}
