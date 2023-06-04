import React from "react";
import * as C from "./Style"
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

function GridItem({item, onDelete}){
    return(
        <C.Tr>
            <C.Td>{item.description}</C.Td>
            <C.Td>R$ {item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? 
                    (<FaRegArrowAltCircleDown color="red"/>)
                :
                    (<FaRegArrowAltCircleUp color="green"/>)
            }
            </C.Td>
            <C.Td alignCenter><FaTrash onClick={() => onDelete(item._id)}/></C.Td>
        </C.Tr>
    )
}

export default GridItem;