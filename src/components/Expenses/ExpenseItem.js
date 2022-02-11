import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";




const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const handlerTitle = () => {
    setTitle('Updated');
  }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{props.amount}</div>
      </div>
      <button onClick={handlerTitle}>ChangeBtn</button>
    </Card>
  );
}

export default ExpenseItem;
