import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaradopcionPageRoutingModule } from './daradopcion-routing.module';

import { DaradopcionPage } from './daradopcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaradopcionPageRoutingModule
  ],
  declarations: [DaradopcionPage]
})
export class DaradopcionPageModule {}
