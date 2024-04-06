import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { NavComponent } from 'src/app/Componente/nav/nav.component';
import { NavModule } from 'src/app/Componente/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    NavModule
  ],
  declarations: [BibliotecaPage]
})
export class BibliotecaPageModule {}
