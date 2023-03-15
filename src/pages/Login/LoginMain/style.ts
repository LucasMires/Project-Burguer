import styled from "styled-components";

export const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0rem 1rem;
    margin-top: 1rem;
    gap: 1rem;
    
    overflow: hidden;

    & > section {
        animation: showSectionLogin 0.6s;
    }

    & > form {
        animation: showFormLogin 0.6s;
    }

    @keyframes showSectionLogin {
        0% {
            opacity: 0;
            transform: translateX(-80vw);
        }
    }
    
    @keyframes showFormLogin {
        0% {
            opacity: 0;
            transform: scale(1.10);
        }
    }

    @keyframes showSectionLogin_Desktop {
        0% {
            transform: translateX(80vw);
        }
    }

    @keyframes showFormLogin_Desktop {
        0% {
            opacity: 0;
            transform: scale(0.10);
        }
    }

    @media (min-width: 650px) {
        & {
            height: 100vh;
            margin: unset;

            flex-direction: row-reverse;
            justify-content: center;

            gap: 2rem;
        }

        & > section {
            animation: showSectionLogin_Desktop 0.6s;
        }

        & > form {
            animation: showFormLogin_Desktop 0.6s;
        }
    }
`