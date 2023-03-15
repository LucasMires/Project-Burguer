import styled from "styled-components";

export const StyledMain = styled.main`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-gray600);
    animation: showNotFoundPage 0.8s;
    
    & > a {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        
        text-decoration: none;
        gap: 1rem;
    }
    
    & > a > img {
        width: 100%;
        transition: 0.5s;

        border-radius: 1rem;
        border: 3px solid var(--color-orange);
    }

    & > a > img:hover {
        border: 3px solid var(--color-blue);
    }

    & > a> h2 {
        color: var(--color-orange);
        transition: 0.5s;

        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);
    }
    & > a> p {
        color: var(--color-orange);
        transition: 0.5s;

        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);
    }

    & > a:hover > h2, 
    & > a:hover > p {
        color: var(--color-blue);
    }

    @keyframes showNotFoundPage {
        0% {
            opacity: 0;
            transform: scale(1.15);
        }
    }
`