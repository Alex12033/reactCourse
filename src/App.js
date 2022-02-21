import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
