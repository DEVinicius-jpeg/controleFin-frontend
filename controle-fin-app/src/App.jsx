import React, { useState, useEffect } from "react";
import GlobalStyle from "./Styles/global";
import Header from "./Components/Header/Header";
import Resume from "./Components/Resume";
import Form from "./Components/Form/Form";
import axios from "axios";

function App() {
  const [transactionList, setTransactionList] = useState([]);
  const url = "http://localhost:3000/api/v1/payments"

  useEffect(() => {
    const getData = () => {
      axios.get(url)
        .then(response => {
          setTransactionList(response.data.payments);
        })
        .catch(error => console.log(error));
    };
  
    getData();
  }, []);
  
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
    
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);
    
    setExpense(`R$ ${expense}`);
    setIncome(`R$ ${income}`);
    setTotal(`${Number(income) < Number(expense)? "-" : ""}R$ ${total}`);
    
  }, [transactionList])

  const handleAdd = (transaction) =>{
    axios.post(url, transaction)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }
  
  return (
    <>
      <Header/>
      <Resume income = {income} expense = {expense} total = {total}/>
      <Form handleAdd = {handleAdd} transactionList ={transactionList} setTransactionList ={setTransactionList}/>
      <GlobalStyle/>
    </>
  )
}

export default App
