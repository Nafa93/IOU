import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesDisplayPage } from './expenses-display';

@NgModule({
  declarations: [
    ExpensesDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesDisplayPage),
  ],
})
export class ExpensesDisplayPageModule {}
