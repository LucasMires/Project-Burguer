import styled from "styled-components";

export const StyledCard = styled.li`
    min-width: 250px;
    min-height: 300px;
    
    display: flex;
    flex-direction: column;

    border: 2px solid var(--color-gray200);
    border-radius: 0.5rem;

    transition: 0.5s;
    overflow: hidden;

    &:hover {
        border: 2px solid var(--color-brand100);
    }
    &:hover {
        border: 2px solid var(--color-brand100);
    }
    &:hover > div > p {
        color: var(--color-brand100);
    }
    &:hover > div > button {
        background-color: var(--color-brand100);
    }

    & > figure {
        width: 100%;

        display: flex;
        justify-content: center;
        
        background-color: var(--color-gray100);
    }

    & > figure > img {
        width: 80%;
    }

    & > div {
        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & > div > h2{
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-1);
    }

    & > div > span{
        font-size: var(--title-3);
        font-weight: var(--fontWeigth-3);
    }
    & > div > p{
        font-size: var(--title-3);
        font-weight: var(--fontWeigth-2);
        transition: 0.5s;
    }

    & > div > button {
        align-self: flex-start;
        
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }
    animation: showCard 0.5s;

    @keyframes showCard {
        0% {
            opacity: 0;
            transform: scale(0);
        }
    }
`