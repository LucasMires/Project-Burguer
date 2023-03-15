import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 400px;
    width: 90%;
    
    display: flex;
    flex-direction: column;
    
    padding: 1rem;
    gap: 1rem;

    border-radius: 0.5rem;
    border: 2px solid var(--color-gray300);
    
    overflow: hidden;
    box-shadow: 1px 3px 38px -6px rgba(0,0,0,0.10);

    & > fieldset > input {
        padding: 1rem;
    }

    & > button {
        padding: 1rem;
    }

    & > div {
        display: flex;
        flex-direction: column;

        text-align: center;
        gap: 1rem;
    }
    & > div > p {
        width: 80%;
        align-self: center;
        
        color: var(--color-gray500);
    }

    & > div > a {
        padding: 1rem;
        border-radius: 0.5rem;

        text-decoration: none;

        font-size: var(--title-2);
        font-weight: var(--fontWeigth-2);
        
        color: var(--color-gray500);
        background-color: var(--color-gray200);

        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            color: var(--color-white);
            background-color: var(--color-blue);
        }
    }
`