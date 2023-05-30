import React, { useState } from "react";
import * as C from "./Style";

function Form(){
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Infome a descrição e o valor!");
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo!");
            return;
        }
    };

    return(
        <C.Conteiner>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input
                 value={desc} 
                 onChange={(e)=>{setDesc(e.target.value)}}
                 />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input 
                 value={amount} 
                 type="number" 
                 onChange={(e)=>{setAmount(e.target.value)}}
                 />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input 
                 type="radio"
                 id="rIncome"
                 name="group1"
                 onChange={()=>{setExpense(!isExpense)}}
                 />
                 <C.Label htmlFor="rIncome" >Entrada</C.Label>

                 <C.Input 
                 type="radio"
                 id="rExpenses"
                 defaultChecked
                 name="group1"
                 onChange={()=>{setExpense(!isExpense)}}
                 />
                 <C.Label htmlFor="rExpenses" >Saída</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
        </C.Conteiner>
    );
};

export default Form;