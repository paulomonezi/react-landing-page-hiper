import styled from "styled-components";
import { Row } from "react-bootstrap";
import { primaryColor } from "../../styles/variables";

export const Section = styled.section`
    background-color: #F7F7F7;
    color: ${primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    overflow: hidden;
    text-align: center; 
`

export const TestimonialsRow = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TestimonialsDepoiments = styled(Row)`
    display: flex;
    justify-content: center;

`

export const H3 = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 220px;
    max-height: 145px;
    margin: 10px 0;
`
export const Strong = styled.strong`
    display: block;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    padding-bottom: 8px;
`

export const Span = styled.span`
    font-size: 14px;
    font-weight: lighter;
    line-height: 20px;
    padding-bottom: 8px;


`