import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    
    ${({className}) =>{
        switch(className) {
            case "SearchButton":
                return css`
                    background-color: transparent;

                    background-image: url("./src/Assets/iconsDashboard/search_icon.svg");
                    background-position: center;
                    background-repeat: no-repeat;

                    cursor: pointer;
                `
            case "CartButton":
                return css`
                    position: relative;

                    background-color: transparent;
                 
                    background-image: url("./src/Assets/iconsDashboard/cart_icon.svg");
                    background-position: center;
                    background-repeat: no-repeat;

                    cursor: pointer;

                    & > span {
                        position: absolute;
                        top: -2px;
                        right: 0;
                        
                        padding: 2px 5px;
                        border-radius: 0.5rem;

                        color: var(--color-white);
                        background-color: var(--color-brand100);
                    }
                `
            case "LogoutButton":
                return css`
                    background-color: transparent;
                 
                    background-image: url("./src/Assets/iconsDashboard/logout_icon.svg");
                    background-position: center;
                    background-repeat: no-repeat;

                    cursor: pointer;
                `
            case "TrashButton":
                return css`
                    background-color: transparent;
                 
                    background-image: url("./src/Assets/iconsDashboard/trash_icon.svg");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 1.5rem;

                    cursor: pointer;
                    border: 1px solid transparent;
                `
            case "OrdinaryButton":
                return css`
                    color: var(--color-gray500);
                    font-size: var(--title-2);
                    font-weight: var(--fontWeigth-2);
                    
                    background-color: var(--color-gray200);
                    
                    border: 1px solid transparent;
                    cursor: pointer;
                    transition: 0.5s;

                    &:hover {
                        color: var(--color-white);
                        background-color: var(--color-brand100);
                    }
                `
            case "BrandButton":
                return css`
                    color: var(--color-white);
                    font-size: var(--title-2);
                    font-weight: var(--fontWeigth-2);
                    
                    background-color: var(--color-brand100);
                    
                    border: 1px solid transparent;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: 0.5s;

                    &:hover {
                        background-color: var(--color-brand200);
                    }
                `
            case "CardButton":
                return css`
                    color: var(--color-white);
                    
                    font-size: var(--title-2);
                    font-weight: var(--fontWeigth-3);
                    
                    background-color: var(--color-gray500);
                    border: 1px solid transparent;
                    
                    cursor: pointer;
                    transition: 0.5s;

                    &:hover {
                        color: var(--color-white);
                        background-color: var(--color-brand100);
                    }
                `
        }
    }}
`