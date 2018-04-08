import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../../classes/expense';

/*
  Generated class for the ExpensesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpensesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ExpensesProvider Provider');
  }

  getExpenses() : Array<Expense>{
    return new Array<Expense>();
  }

}
