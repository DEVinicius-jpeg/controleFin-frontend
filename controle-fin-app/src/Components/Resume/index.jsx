import React from "react";
import * as C from "./style";
import ResumeItem from "../ResumeItem";
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

function Resume(){
    return(
        <C.Container>
            <ResumeItem title = "Entradas" value = "R$1000,00" Icon={FaRegArrowAltCircleUp}/>
            <ResumeItem title = "Saídas" value = "R$0,00" Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem title = "Total" value = "R$1000,00" Icon={FaDollarSign}/>
        </C.Container>
    )
}

export default Resume