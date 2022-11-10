import styled from "styled-components";
import { primaryColor } from "../../styles/variables";

export const Section = styled.section`
min-height: 240px;
color: ${primaryColor};
margin-top: 5%;
overflow-x: hidden;
`

export const H1 = styled.h1`
    font-family: Open Sans, sans-serif;
    font-size: 32px;
    color: ${primaryColor};
    line-height: 40px;
    max-width: 310px;
    font-weight: 500;
    text-align: right;
`

export const Separator = styled.div`
  height: 120px;
  margin-bottom: -50px;
  width: 2px;
  background-color: ${primaryColor};
  border: 1.5px solid;
`

export const Span = styled.span`
  font-size: 16px;
  line-height: 24px;
  max-width: 526px;
`