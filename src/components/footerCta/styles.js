import styled from "styled-components";
import { primaryColor } from "../../styles/variables";

export const Section = styled.section`
background-color: #f7f7f7;
color: ${primaryColor};
display: flex;
justify-content: space-evenly;
align-items: center;
min-height: 300px;
overflow-x: hidden;
`

export const H2 = styled.h2`
    font-size: 24px;
    line-height: 40px;
    font-weight: 600;
    margin: 50px 0 25px 0;
`

export const Button = styled.button`
    align-self: center;
    margin: 50px 0 25px 0;
    width: 300px;
    display: block;
    text-align: center;
    border: none;
    background: #FFC200;
    padding: 10px 30px;
    color: ${primaryColor};
    font-weight: 600 !important;
    font-size: 14px;
    text-decoration: none;
    border-radius: 5px !important;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 16%);
`
