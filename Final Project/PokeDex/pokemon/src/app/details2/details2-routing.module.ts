import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details2Page } from './details2.page';

const routes: Routes = [
  {
    path: '',
    component: Details2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details2PageRoutingModule {}
