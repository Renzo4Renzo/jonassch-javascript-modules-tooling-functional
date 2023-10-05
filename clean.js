'use strict';

//Run this code with Parcel, otherwise the import will fail
import { pipe } from 'ramda';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getSpendingLimit = (spendingLimits, user) => spendingLimits?.[user] ?? 0;

const addExpense = function (
  budget,
  spendingLimits,
  value,
  description,
  user = 'jonas'
) {
  const transformedUser = user.toLowerCase();

  return value <= getSpendingLimit(spendingLimits, transformedUser)
    ? [...budget, { value: -value, description, user: transformedUser }]
    : budget;
};

const checkExpenses = (budget, spendingLimits) =>
  budget.map(budgetEntry =>
    budgetEntry.value < -getSpendingLimit(spendingLimits, budgetEntry.user)
      ? { ...budgetEntry, flag: true }
      : budgetEntry
  );

const logExpensesOverInputValue = function (budget, inputValue) {
  const expensesBiggerThanInput = budget
    .filter(expense => expense.value <= -inputValue)
    .map(expense => expense.description.slice(-2))
    .join(' / ');
  console.log(expensesBiggerThanInput);
};

const processBudget = pipe(
  budget => addExpense(budget, spendingLimits, 10, 'Pizza 🍕'),
  budget => addExpense(budget, spendingLimits, 100, 'Movies 🍿', 'Matilda'),
  budget => addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay'),
  budget => checkExpenses(budget, spendingLimits),
  budget => {
    console.log(budget);
    return budget;
  },
  budget => logExpensesOverInputValue(budget, 500)
);

processBudget(budget);
