const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getSpendingLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  if (value <= getSpendingLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (let entry of budget) {
    if (entry.value < -getSpendingLimit(entry.user)) {
      entry.flag = true;
    }
  }
};
checkExpenses();

const logExpensesOverInputValue = function (inputValue) {
  let output = '';
  for (let entry of budget) {
    output +=
      entry.value <= -Number(inputValue)
        ? `${entry.description.slice(-2)} / `
        : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logExpensesOverInputValue(500);
