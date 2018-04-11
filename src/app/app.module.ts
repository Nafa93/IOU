import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ManagementPage } from '../pages/management/management';
import { AddExpensePage } from '../pages/add-expense/add-expense';
import { ExpensesProvider } from '../providers/expenses/expenses';
import { SideMenuComponent } from '../components/side-menu/side-menu';

@NgModule({
  declarations: [
    MyApp,
    ManagementPage,
    AddExpensePage,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ManagementPage,
    AddExpensePage,
    SideMenuComponent
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
