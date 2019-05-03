'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt(" Введите дату в формате", " YYYY-MM-DD "),
    expensesAsck1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expensesAsck2 = prompt("Во сколько обойдется?", "");

console.log(money);
console.log(time);

let expenses = {
  expensesAsck1,
  expensesAsck2
};
console.log(expenses);

let appData = {
    moneyData: money,
    timeData: time,
    expensesData: expenses,
    optionalExpenses: {},
    income: {},
    savings: false
};