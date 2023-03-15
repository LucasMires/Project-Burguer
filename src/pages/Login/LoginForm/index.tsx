import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { StyledForm } from "./style"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "./LoginSchema"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"

interface ILoginData {
    email: string
    password: string
}

export const LoginForm = () => {
    
    const { register, handleSubmit, formState: { errors }} = useForm<ILoginData>({
        resolver: yupResolver(LoginSchema),
        mode: "onChange"
    })

    const { RequestLogin, loading } = useContext(UserContext)

    const submit: SubmitHandler<ILoginData> = (data) => {
        RequestLogin(data)
    }
    
    return (
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>

            <Input
                disabled={ loading }
                id="email"
                label="Email: "
                type="email"
                placeholder="Digite seu Email"
                fieldClass="FormField"
                inputClass="FormInput"
                {...register("email")}
                errors ={ errors.email?.message } 
            />
            
            <Input
                disabled={ loading } 
                id="password"
                label="Senha: "
                type="password"
                placeholder="Digite sua Senha"
                fieldClass="FormField"
                inputClass="FormInput"
                {...register("password")}
                errors ={ errors.password?.message } 
            />

            <Button
                className="BrandButton"
                type="submit"
                disabled={ loading } 
            >
                { loading ? "Logando..." : "Logar"}
            </Button>

            <div>
                <p>
                    Crie sua conta para saborear muitas delícias e matar sua fome!
                </p>
                <Link to="/register">
                    Cadastrar
                </Link>
            </div>
        </StyledForm>
    )
}