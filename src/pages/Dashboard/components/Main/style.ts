import styled from "styled-components";

export const StyledMain = styled.main`
    
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    & > ul {
        display: flex;
        align-items:center;
        gap: 1rem;

        overflow-x: auto;
        padding: 1rem;
    }

    & > ul > section {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 0.5rem;

        animation: showNotFoundItem 0.8s;
    }

    & > ul > section img {
        width: 100%;
    }

    & > ul > section h2 {
        color: var(--color-orange);

        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);
    }

    @keyframes showNotFoundItem {
        0% {
            opacity: 0;
            transform: scale(1.10);
        }
    }

    @media (min-width:650px) {
        & > ul {
            max-width: 850px;
            width: 90%;

            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            
            overflow-x: unset;
        }
    }
`