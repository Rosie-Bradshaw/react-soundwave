import styled, { createGlobalStyle } from "styled-components"; 


export const theme = {
    generalBackground: '#302E3A', 
    darkBackground: '#211f27', 
    buttonBackground: '#0451A9', 
    buttonHover: '#2180D8', 
    buttonFocus: '#2796FF',
    accentText: '#D3007B', 
    whiteText: '#ffffff', 
    blueCircle: '#303047', 
    purpleCircle: '#412c41', 
    borderInput: '#adadad'  
}

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

    * {
        margin:0; 
        padding: 0; 
        outline: 0; 
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    
    body {
        background-color: ${theme.generalBackground};
        color: ${theme.whiteText}; 
        position: relative;
        
    }

    #root {
        margin:0 auto;
    }

    a{
        text-decoration: none;
        color: white;
    }

    h1{
        font-size: 3.5rem;
        font-weight: 500;
        @media screen and (max-width:700px){
            font-size: 3rem;
        }
    }

    h2{
        font-size: 1.75rem;
        font-weight: 500;
        margin-bottom: 30px;
        margin-top: 30px;
        @media screen and (max-width:700px){
            font-size: 1.4rem;
        }
    }
    
    p{
        font-size: 1.2rem;
        @media screen and (max-width: 700px){
            font-size: 1rem;
        }
    }

    input{
        background-color: transparent;
        color: ${theme.whiteText};
        border: 1px solid ${theme.generalBackground}; 
        padding: 10px; 
        border-radius: 5px;
        width: 100%;
        margin: 10px 0 30px 0;

        &:hover{
            border-color: ${theme.borderInput};
        }

        &:focus{
            border-color: ${theme.borderInput};
        }
    }

    @media screen and (max-width: 700px){
                
    }

    @media screen and (max-width: 550px){

    }

`

export const Container = styled.div`
    padding: 2rem;
    min-width: 700px;
    width: 1400px;
    margin: auto;
    display: flex;
    align-items: center;
    align-content:center;
    @media screen and (max-width: 700px){
        min-width:375px;
    }
`

export const MainContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 80vh;
    width: 80vw;
    @media screen and (max-width: 700px){
      gap:10px
    }
`

export const BoldText = styled.p`
    font-weight: 600;
    @media screen and (max-width:700px){
        font-size: 0.9rem;
    }
`

export const FlexDivRow = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width:700px){
        gap: 10px;
    }
`
export const DivHalf = styled.div`
    width: 50%;
`

export const DisplayText = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    @media screen and (max-width:700px){
        font-size: 4rem;
    }
`

export const AccentColorSpan = styled(DisplayText)`
    color: ${theme.accentText}
`


