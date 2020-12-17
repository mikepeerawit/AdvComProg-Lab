import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details2PageRoutingModule } from './details2-routing.module';

import { Details2Page } from './details2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details2PageRoutingModule
  ],
  declarations: [Details2Page]
})
export class Details2PageModule {}
