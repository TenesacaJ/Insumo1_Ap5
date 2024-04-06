import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaPageRoutingModule } from './sala-routing.module';

import { SalaPage } from './sala.page';
import { NavModule } from 'src/app/Componente/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaPageRoutingModule,
    NavModule
  ],
  declarations: [SalaPage]
})
export class SalaPageModule {}
