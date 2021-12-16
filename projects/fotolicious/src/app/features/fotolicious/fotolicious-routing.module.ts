import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoliciousComponent } from './fotolicious/fotolicious.component';

const routes: Routes = [
  {
    path: '',
    component: FotoliciousComponent,
    data: { title: 'anms.menu.fotolicious' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotoliciousRoutingModule {}
