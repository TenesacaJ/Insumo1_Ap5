import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavanderiaPageRoutingModule } from './lavanderia-routing.module';

import { LavanderiaPage } from './lavanderia.page';
import { NavModule } from 'src/app/Componente/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavanderiaPageRoutingModule,
    NavModule
  ],
  declarations: [LavanderiaPage]
})
export class LavanderiaPageModule {}
