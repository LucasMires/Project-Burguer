import styled from "styled-components";

export const StyledCard = styled.li`
    width: 90%;
    display: flex;

    gap: 1rem;
    padding: 1rem 0.5rem;

    & > img {
        width: 25%;
        border-radius: 0.5rem;

        background-color: var(--color-gray200);
    }

    & > div {
        width: 50%;
        display: flex;
        align-items: center;
    } 

    & > div > h2 {
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);
    }

    & > button {
        padding: 1.5rem;
    }
`