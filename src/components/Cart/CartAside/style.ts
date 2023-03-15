import styled from "styled-components";

export const StyledAside = styled.aside`
    max-width: 500px;
    width: 90%;

    border-radius: 1rem;
    overflow: auto;
    
    animation: showModal 0.5s;
    background-color: var(--color-white);  
    
    .CartTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 1rem;

        background-color: var(--color-brand100);
    }
    .CartTitle > h2 {
        font-size: var(--title-2);
        font-weight: var(--fontWeigth-2);
        color: var(--color-white);
    }
    .CartTitle > button {
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);

        color: var(--color-white);
        border: 1px solid transparent;
        background-color: transparent;
    }
    & > ul {
        max-height: 250px;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;

        overflow-y: auto;
    }

    & > ul > div {
        width: 100%;
        height: 150px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 0.5rem;
        padding: 1rem 0rem;
    }

    & > ul > div > h2 {
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-1);
        color: var(--color-black);
    }

    & > ul > div > p {
        color: var(--color-gray400);
        font-size: var(--title-2);
        font-weight: var(--fontWeigth-3);
    }

    .CartResults {
        display: flex;
        flex-direction: column;
        
        gap: 1rem;
        padding: 1rem;
        
        border-top: 2px solid var(--color-gray300);
    }
    .CartResults > div {
        
        display: flex;
        justify-content: space-between;
    }

    .CartResults > div > p {
        color: var(--color-black);

        font-size: var(--title-3);
        font-weight: var(--fontWeigth-2);
    }

    .CartResults > div > span {
        color: var(--color-gray500);

        font-size: var(--title-3);
        font-weight: var(--fontWeigth-2);
    }

    .CartResults > button {
        padding: 1rem 0rem;
        border-radius: 0.5rem;
    }

    @keyframes showModal {
        0% {
            opacity: 0;
            transform: scale(2);
        }
    }
`
