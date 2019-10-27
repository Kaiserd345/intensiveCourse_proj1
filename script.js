let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expensName: howMuch
    },
    optionalExpenses: {},
    income: 0,
    savings: false
};

var expensName = prompt("Введите обязательную статью расходов в этом месяце");
var howMuch = prompt("Во сколько обойдется?");

appData.expenses = {expensName: howMuch};

alert("Ваш бюджет на один день" + appData.budget/30);