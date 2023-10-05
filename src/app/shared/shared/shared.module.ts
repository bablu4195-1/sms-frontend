import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    PriceComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    PriceComponent
  ]
})
export class SharedModule { }
