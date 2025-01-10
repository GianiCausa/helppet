import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaradopcionPage } from './daradopcion.page';

const routes: Routes = [
  {
    path: '',
    component: DaradopcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaradopcionPageRoutingModule {}
