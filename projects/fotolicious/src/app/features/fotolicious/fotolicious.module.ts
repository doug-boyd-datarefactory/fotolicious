import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { FotoliciousComponent } from './fotolicious/fotolicious.component';
import { FotoliciousRoutingModule } from './fotolicious-routing.module';

@NgModule({
  declarations: [FotoliciousComponent],
  imports: [CommonModule, MdbCarouselModule, FotoliciousRoutingModule]
})
export class FotoliciousModule {}
