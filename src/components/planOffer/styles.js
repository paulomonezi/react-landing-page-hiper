import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
color: #6A4B9D;
`

export const Card = styled.div`
min-height: 70vh;
max-width: 370px;
border: solid 1.4px #6A4B9D;
border-radius: 10px;
padding: 20px 20px 70px 20px;
display: flex;
flex-direction: column;
position: relative;
transition: 350ms ease-in-out;
    &:hover{
        color: #fff;
        background-color: #6A4B9D;
        transition: 350ms ease-in-out;
        .btn-focus{
            text-decoration: underline;
            background: #FFC200;
            color: #6a4b9d;
        }
    }
`

export const Img = styled.img`
    position: absolute;
    right: -20px;
    top: -50px;
    z-index: 100;
`

export const H3 = styled.h3`
padding: 20px 0px;
`

export const CardText = styled.p`
font-size: 12px;
margin-bottom: 20px;
`

export const ButtonFocus = styled.button`
    align-self: center;
    margin: 50px 0 25px 0;
    width: 300px;
    display: block;
    text-align: center;
    border: none;
    background: #FFC200;
    padding: 10px 30px;
    color: #6a4b9d;
    font-weight: 600 !important;
    font-size: 14px;
    text-decoration: none;
    border-radius: 5px !important;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 16%);
    &:hover{
        text-decoration: underline;
    }
`

export const Button = styled.button`
    align-self: center;
    margin: 50px 0 25px 0;
    width: 300px;
    display: block;
    text-align: center;
    border: none;
    background: #E3E3E3;
    padding: 10px 30px;
    color: #A8A8A8;
    font-weight: 600 !important;
    font-size: 14px;
    text-decoration: none;
    border-radius: 5px !important;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 16%);
`

export const List = styled.ul`
    position:relative;`

export const Icon = styled.i`
    color: #ffc200;
    font-size: 18px;
    font-weight: bolder;
    margin-right: 10px;
    position: absolute;
    left: 0px;
`
export const Span = styled.span`
    font-size: 12px;
    line-height: 20px;
    padding-bottom: 8px;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 250px;
`
