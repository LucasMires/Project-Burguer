import styled from "styled-components";

export const StyledSectionWrapper = styled.section`
    body {
        position: relative;
    }

    width: 100vw;
    height: 100vh;
    
    position: fixed;
    z-index: 1;

    background-color: #00000040;

    display: flex;
    align-items: center;
    justify-content: center;

    animation: showModalWrapper 0.5s;
    
   @keyframes showModalWrapper {
        0% {
            opacity: 0;
        }
    }
`