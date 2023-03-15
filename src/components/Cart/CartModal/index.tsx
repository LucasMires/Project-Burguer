import React from "react"
import { StyledSectionWrapper } from "./style"

interface ICartModalProps {
    children: React.ReactNode
}

export const CartModal = ({ children }:ICartModalProps) => {
    return (
        <StyledSectionWrapper>
            { children }
        </StyledSectionWrapper>
    )
}