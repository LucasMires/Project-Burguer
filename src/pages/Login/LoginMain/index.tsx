import { LayoutFormPages } from "../../../components/LayoutFormPages"
import { LoginForm } from "../LoginForm" 
import { StyledMain } from "./style"

export const LoginPage = () => {
    return (
        <StyledMain>
            <LayoutFormPages />
            <LoginForm />
        </StyledMain>
    )
}