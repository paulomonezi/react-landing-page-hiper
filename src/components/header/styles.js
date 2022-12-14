import styled from "styled-components";
import { primaryColor } from "../../styles/variables";

export const Header = styled.header`
    background-color: #f7f7f7;
    min-height: 120px;
    overflow-x: hidden;
`

export const Nav = styled.nav`
    margin-right: 5%;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: end;
`

export const Li = styled.li`
 &:nth-child(-n+2) {
          &:after {
            content: "|";
            padding-left: 10px;
            padding-right: 10px;
          }
        }
`

export const A = styled.a`
color: #86709B;
text-decoration: none;
font-size: 9px;
&:hover{
  text-decoration: underline;
}
`

export const DivFlexStart = styled.div`
  display: flex;
  justify-content: start;
`

export const DivFlexEnd = styled.div`
  display: flex;
  justify-content: end;
`

export const DivFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const ContactButton = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${primaryColor};
  font-weight: 600;
  width: 170px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid ${primaryColor};
  padding: 5px;
  transition: 0.3s;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 16%);
    &:hover{
      background-color: #FFC200;
      border: 1px solid #FFC200
  }
`