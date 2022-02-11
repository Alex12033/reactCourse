import React from 'react';
import Expenses from "./components/Expenses/Expenses";


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

  return (
    <div>
      <h3>Lets get started</h3>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
