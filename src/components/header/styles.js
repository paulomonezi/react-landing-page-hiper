import styled from "styled-components";

export const Header = styled.header`
    background-color: #f7f7f7;
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

export const A = styled.a``

export const Img = styled.img``

export const DivFlexEnd = styled.div`
  display: flex;
  justify-content: end;
`