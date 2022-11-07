import styled from "styled-components";

export const Footer = styled.footer`
    min-height: 520px;
    background: linear-gradient(97deg, rgba(106, 75, 157, 0.877188) 0%, #a84ad3 100%);
    color: white;
    font-size: .8em;
    padding-top: 50px;
    position: relative;
    overflow: hidden;
`

export const CopyRight = styled.div`
    position: absolute;
    bottom: 0px;
    border-top: 1px solid rgba(106, 75, 157, 0.877188);
    width: 100vw;
    padding: 10px;
`
 
export const Span = styled.span`
    font-size: 11px;
    padding-left: 300px;
`

export const H3 = styled.h3`
font-size: 16px;
`

export const Link = styled.a`
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 100;
    cursor: pointer;
    text-decoration: none;
    padding: 4px 0px 5px 0px;
    &:hover{
        color: #FFF;
        text-decoration:underline;
    }
`