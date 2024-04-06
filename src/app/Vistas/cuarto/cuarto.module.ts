import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartoPageRoutingModule } from './cuarto-routing.module';

import { CuartoPage } from './cuarto.page';
import { NavModule } from 'src/app/Componente/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartoPageRoutingModule,
    NavModule
  ],
  declarations: [CuartoPage]
})
export class CuartoPageModule {}
