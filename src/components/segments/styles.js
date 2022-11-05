import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Section = styled.section`
color: #6A4B9D;
margin-left: 20%;
margin-right: 20%;
`

export const Card = styled.div`
max-width: 225px;
height: 225px;
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

export const ColSegment = styled(Col)`
max-width: 225px;
padding: 3px;
`

export const P = styled.p`
    order: 100;
    padding: 20px 8px;
    text-align: right;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 600;
    margin: 20px 8px 0 auto;
    color: #6a4b9d;
`

export const Link = styled.a`
    color: #6a4b9d;
    &:hover{
        color: #6a4b9d;
    }
`