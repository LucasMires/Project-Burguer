import styled from "styled-components";

export const StyledSection = styled.section`

    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    margin-top: 1rem;

    & > h1 {
        display: flex;
        gap: 0.3rem;

        font-size: 2rem;
        font-weight: var(--fontWeigth-1);
        color: var(--color-black);
    }
    & > h1 > p {
        color: var(--color-orange);
        
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-1);
        align-self: flex-end;
    }

    & > article {
        max-width: 400px;

        display: flex;
        align-items: center;

        gap: 1rem;
        padding: 1rem;

        border: 1px solid var(--color-gray400);
        border-radius: 0.3rem;

        box-shadow: 1px 3px 38px -6px rgba(0,0,0,0.10);
    }

    & > article > figure {
        display: flex;
        align-items: center;
        justify-content: center;
        
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #27ae601f;
    }

    & > article > p {
        color: var(--color-gray500);

        font-size: var(--title-2);
        font-weight: var(--fontWeigth-3);
    }
    & > article > p > span {
        color: var(--color-black);
    }

    & > img {
        display: none;
    }

    @media (min-width: 650px) {
        & > img {
            display: block;
            width: 30%;
        }
    }
`