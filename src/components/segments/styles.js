import styled from "styled-components";

export const Section = styled.section`
color: #6A4B9D;
margin-left: 20%;
margin-right: 20%;
`

export const Card = styled.div`
max-width: 220px;
height: 220px;
background-color: #F0F3F2;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
&:hover{
    background-color: #F6E3FF
}
`

export const Img = styled.img`
position: absolute;
`

export const Span = styled.span`
position: relative;
top: 65px;
font-weight: 600;
`