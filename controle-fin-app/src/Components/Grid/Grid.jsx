import React from "react";
import GridItem from "../GridItem/GridItem";
import * as C from "./Style";
import axios from "axios";


function Grid({itens, setItens}){
    const onDelete = (ID) =>{
        const urlDelete = `http://localhost:3000/api/v1/payments/${ID}`
        
        axios.delete(urlDelete)
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))

    };

    return(
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width= {40}>Descrição</C.Th>
                    <C.Th width= {40}>Valor</C.Th>
                    <C.Th width= {10} alignCenter>Tipo</C.Th>
                    <C.Th width= {10}></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) =>(
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </C.Tbody>
        </C.Table>
    )
}

export default Grid