import styled from "styled-components";

export const Header = styled.header`
    background-color: #f7f7f7;
    height: 119px;
`

export const Nav = styled.nav`
    margin-right: 5%;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: end;
`

export const Li = styled.li`
 &:nth-child(1),
 &:nth-child(2) {
          &:after {
            content: "|";
            padding-left: 10px;
            padding-right: 10px;
          }
        }
`

export const A = styled.a`
font-size: 9px;
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