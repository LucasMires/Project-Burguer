import styled from "styled-components";

export const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0rem 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 1rem;
    
    overflow: hidden;

    & > section {
        animation: showSectionRegister 0.6s;
    }

    & > form {
        animation: showFormRegister 0.6s;
    }

    @keyframes showSectionRegister {
        0% {
            transform: translateY(-80vw);
        }
    }
    
    @keyframes showFormRegister {
        0% {
            opacity: 0;
            transform: scale(1.10);
        }
    }

    @keyframes showSectionRegister_Desktop {
        0% {
            transform: translateX(-80vw);
        }
    }

    @keyframes showFormRegister_Desktop {
        0% {
            opacity: 0;
            transform: scale(0.10);
        }
    }

    @media (min-width: 650px) {
        & {
            height: 100vh;
            margin: unset;

            flex-direction: row;
            justify-content: center;

            gap: 2rem;
        }

        & > section {
            animation: showSectionRegister_Desktop 0.6s;
        }

        & > form {
            animation: showFormRegister_Desktop 0.6s;
        }
    }
`
