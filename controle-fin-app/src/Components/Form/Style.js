import styled from "styled-components";

export const Conteiner = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    back-ground-color: #FFF;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media(max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding 5px;
    font-size: 15px;
    border: 1px solid #CCC;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        accent-color: black;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: teal;
`;

