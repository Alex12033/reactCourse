import React, { useState } from "react";
import ButtonExpenses from "./ButtonExpenses";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  const [displayForm, setDisplayform] = useState(false);

  const titleChangeValue = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeValue = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeValue = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpensData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    setDisplayform(false); //when click add expense form hide
  };

  const onClickDisplayForm = () => {
    setDisplayform(true);
  };

  const onClickHideForm = () => {
    setDisplayform(false);
  };

  return (
    <form onSubmit={submitHandler}>
      {displayForm === false ? <ButtonExpenses text="Add New Expense" onPress={onClickDisplayForm} /> : ''}
      {displayForm && (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeValue}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                onChange={amountChangeValue}
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeValue}
                min="2019-01-01"
                max="2022-12-31"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <ButtonExpenses text="Cancel" onPress={onClickHideForm}/>
            <ButtonExpenses text="Add Expense" />
          </div>
        </>
      )}
    </form>
  );
};

export default ExpenseForm;
