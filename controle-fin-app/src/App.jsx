import React, { useState, useEffect } from "react";
import GlobalStyle from "./Styles/global";
import Header from "./Components/Header/Header";
import Resume from "./Components/Resume";
import Form from "./Components/Form/Form";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const amountExpense = transactionList
      .filter((item)=> item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionList
      .filter((item)=> !item.expense)
      .map((transaction) => Number(transaction.amount));
    
    const expense = amountExpense.reduce((acc, cur) => acc + cur).tofixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur).tofixed(2);

    const total = Math.abs(income - expense).tofixed(2);
    
    setExpense(`R$ ${expense}`);
    setIncome(`R$ ${income}`);
    setTotal(`${Number(income) < Number(expense)? "-" : ""}R$ ${total}`);
    
  }, [transactionList])

  const handleAdd = (transaction) =>{
    const newArrayTransactions = [...transactionList, transaction];

    setTransactionList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }
  
  return (
    <>
      <Header/>
      <Resume income = {income} expense = {expense} total = {total}/>
      <Form handleAdd = {handleAdd}/>
      <GlobalStyle/>
    </>
  )
}

export default App
