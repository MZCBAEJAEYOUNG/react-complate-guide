import React, {useState} from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 2, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 15) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 15) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2020, 2, 16) },
  { id: 'e5', title: 'LapTop', amount: 1500, date: new Date(2020, 3, 16) },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('App.js > addExpenseHandler > expense = ', expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
