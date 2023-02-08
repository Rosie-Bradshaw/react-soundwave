import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Global.styles";


export const StyledJoinButton = styled(Link)`
    background-color: ${theme.buttonBackground};
    font-size: medium;
    font-weight: 200;
    padding: 1rem 2rem;
    border-radius: 10px;
    display: flex;
    inline-size: fit-content;
    margin-left: 0;

    &:hover {
        background-color: ${theme.buttonHover};
    }

    &:focus {
        background-color: ${theme.buttonFocus};
    }
`

export const StyledFullWidthJoinButton = styled(StyledJoinButton)`
    width: 100%;
    justify-content: center;
    padding: 0.75rem;
`