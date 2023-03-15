import styled from "styled-components";

export const Header = styled.header`

    display: flex;
    justify-content: center;

    animation: showHeader 0.8s;
    background-color: var(--color-gray100);

    & > div {
        max-width: 700px;
        width: 100%;
        min-height: 3rem;

        padding: 1rem;
        overflow: auto;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        position: relative;
    }

    @media (max-width: 282px) {
        & > div {
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    .titleBox {
        display: flex;
        gap: 0.3rem;
    }
    .titleBox > h1 {
        font-size: var(--title-1);
        font-weight: var(--fontWeigth-2);
        color: var(--color-black);
    }
    .titleBox > p {
        font-size: var(--title-3);
        font-weight: var(--fontWeigth-2);
        align-self: flex-end;
        color: var(--color-orange);
    }
    
    .actionBox {
        display: flex;
        align-items: center;

        gap: 0.7rem;
        overflow: auto;
    }
    
    .actionBox > button {
        width: 30px;
        height: 30px;

        padding: 1rem;
        border: 1px solid transparent;
    }
    
    .actionBox > fieldset {
        max-width: 250px;
        width: 60%;
        height: 70%;

        position: absolute;
        left: 0.8rem;
        animation: showFieldset 0.7s;
    }

    .actionBox > fieldset > input {
        width: 100%;

        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }

    @keyframes showFieldset {
        0% {
            transform: translateX(-100vh);
        }
    }

    @keyframes showHeader {
        0% {
            transform: translateY(-100vh);
        }
    }

    @media (min-width: 600px) {
        .actionBox {
            justify-content: flex-end;
            gap: 1rem;
        }
        .actionBox > fieldset {
            display: block;

            position: unset;
            animation: unset;
        }
        .actionBox > fieldset > input {
            width: 90%;
        }
        .SearchButton {
            display: none;
        }
    }
`