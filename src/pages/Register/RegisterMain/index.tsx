import { LayoutFormPages } from "../../../components/LayoutFormPages"
import { RegisterForm } from "../RegisterForm"
import { StyledMain } from "./style"

export const RegisterPage = () => {
    return (
        <StyledMain>
            <LayoutFormPages />
            <RegisterForm />
        </StyledMain>
    )
}