import React from "react";
import GridItem from "../GridItem/GridItem";
import * as C from "./Style";


function Grid({itens, setItens}){
    const onDelete = (ID) =>{
        const newArray = itens.filter((transction)=> transction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
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