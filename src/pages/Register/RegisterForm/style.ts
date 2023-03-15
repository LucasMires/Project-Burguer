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

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > div h2 {
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);
    }

    & > div > a {
        color: var(--color-gray500);

        font-size: var(--title-2);
        font-weight: var(--fontWeigth-2);

        transition: 0.5s;
    }
    & > div > a:hover {
        color: var(--color-brand100);
    }

    & > fieldset > input {
        padding: 1rem;
    }

    & > button {
        padding: 1rem;
    }
`