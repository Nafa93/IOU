import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AddExpensePage } from '../pages/add-expense/add-expense';
import { ExpensesProvider } from '../providers/expenses/expenses';
import { SideMenuComponent } from '../components/side-menu/side-menu';
import { ExpensesDisplayPage } from '../pages/expenses-display/expenses-display';
import { GenericHeaderComponent } from '../components/generic-header/generic-header';
import { ManagementPage } from '../pages/management/management';

@NgModule({
  declarations: [
    MyApp,
    ExpensesDisplayPage,
    AddExpensePage,
    SideMenuComponent,
    GenericHeaderComponent,
    ManagementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpensesDisplayPage,
    AddExpensePage,
    SideMenuComponent,
    GenericHeaderComponent,
    ManagementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExpensesProvider,
    ExpensesProvider,
    ExpensesProvider
  ]
})
export class AppModule {}
