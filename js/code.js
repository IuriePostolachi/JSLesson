'use strict';



function expensesCalc() {
  let money = document.getElementById('money').value,
      time = document.getElementById('time').value,
      expensesAsck1 = document.getElementById('ask1').value,
      expensesAsck2 = document.getElementById('ask2').value;
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
  console.log(appData);

  let spending = (money - expensesAsck2) / 30;

  let info = 'Ваш бюджет на 1 день : <b>' +  spending + '</b> рублей';  
  document.getElementById('result').innerHTML = info;

  
}

document.getElementById('calc').addEventListener('click', expensesCalc);