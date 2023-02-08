import styled from "styled-components";
import { theme } from "../../Global.styles";

export const FormDiv = styled.div`
    background-color: ${theme.darkBackground};
    min-width: 500px; 
    height: fit-content;
    padding: 50px; 
    border-radius: 15px;
    @media screen and (max-width:700px){
        min-width: 350px;
        padding: 30px 50px
    }
`

