import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`

    & > input {
        outline: none;
    }

    & > p {
        color: var(--color-red);
        font-size: var(--title-2);
        font-weight: var(--fontWeigth-3);

        animation: showError 0.5s;
    }
    
    @keyframes showError {
        0% {
            transform: translateX(-100%);
        }
    }

    & > label {
        color: var(--color-gray500);
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-3);
    }

    .ErrorBorder {
        font-size: var(--title-2);
        font-weight: var(--fontWeigth-3);

        border: 2px solid var(--color-red);
        border-radius: 0.3rem;

        transition: 0.5s;
    }

    .SearchInput {
        font-size: var(--title-2);
        font-weight: var(--fontWeigth-2);

        border: 2px solid var(--color-gray400);
        transition: 0.5s;
    }
    
    .FormInput {
        font-size: var(--title-2);
        font-weight: var(--fontWeigth-3);

        padding-left: 1rem;
        
        border-radius: 0.3rem;
        border: 2px solid transparent;
        background-color: var(--color-gray100);

        transition: 0.5s;
    }
    .FormInput:focus {
        border: 2px solid var(--color-black);
        background-color: var(--color-white);
    }
`