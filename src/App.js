import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 1.2,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "New tv",
      amount: 2,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e3",
      title: "New car",
      amount: 2223,
      date: new Date(2022, 2, 28),
    },
  ];

  const addExpenseHandler = expenses => {
    console.log('In apps');
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
