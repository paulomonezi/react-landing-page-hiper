import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    a{
        color: #FFF;
        text-decoration: none;
        &:hover{
            color: #FFF;
            text-decoration: underline;
        }
    }
}
`


export default GlobalStyle