import styled from "styled-components";

export const Section = styled.section`
    min-height: 520px;
    background: linear-gradient(97deg, rgba(106, 75, 157, 0.877188) 0%, #a84ad3 100%);
`

export const Container = styled.div`
height: auto;
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
`

export const H3 = styled.h3`
    text-align: start;
    font-size: 32px;
    width: 350px;
    line-height: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    color: #FFF;
`

export const P = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 200;
    margin-bottom: 26px;
    color: #FFF;
`
export const Link = styled.a`
    order: 100;
    padding: 20px 0px;
    text-align: right;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 600;
    margin: 20px 8px 0 auto;
    color: #FFF;
    &:hover{
        color: #fff;
    }
`

export const Button = styled.button`
    margin-top: 50px;
    width: 240px;
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
`

export const LeftContainer = styled.div`
margin-right: 50px;
`

export const Img = styled.img`
margin-top: 50px;
`

export const LinkSlider = styled.a`
    text-align: right;
    font-size: 13px;
    text-decoration: none;
    font-weight: 600;
    margin: 0 40px 0 auto;
    color: #FFF;
    border-bottom: 2px solid white;
    padding-bottom: 14px;
    &:hover{
        color: #fff;
    }
`