import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { Link } from "react-router-dom"

import { SubmitHandler, useForm } from "react-hook-form"
import { StyledForm } from "./style"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterSchema } from "./RegisterSchema"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"

interface IRegisterData {
    name: string
	email: string
	password: string
    passwordConfirmation: string
}

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegisterData>({
        resolver: yupResolver(RegisterSchema),
        mode: "onChange",
    })

    const { RequestRegistration, loading } = useContext(UserContext)
    
    const submit: SubmitHandler<IRegisterData> =(data) => {
       const { name, email, password } = data
       const newData = { name, email, password }
       RequestRegistration(newData)
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
            <div>
                <h2>Cadastro</h2>
                <Link to="/login">
                    Retornar para Login
                </Link>
            </div>

            <Input
                disabled={ loading } 
                id="name"
                label="Nome: "
                type="text"
                placeholder="Digite seu nome"
                fieldClass="FormField"
                inputClass="FormInput"
                {...register("name")}
                errors={ errors.name?.message }
            />
            <Input
                disabled={ loading } 
                id="email"
                label="Email: "
                type="email"
                placeholder="Digite seu Email"
                fieldClass="FormField"
                inputClass="FormInput"
                {...register("email")}
                errors={ errors.email?.message } 
            />
            <Input
                disabled={ loading } 
                id="password"
                label="Senha: "
                type="password"
                placeholder="Senha"
                fieldClass="FormField"
                inputClass="FormInput"
                {...register("password")}
                errors={ errors.password?.message }
            />
            <Input
                disabled={ loading } 
                id="passwordConfirmation"
                label="Confirme Senha: "
                type="password"
                placeholder="Confirma Senha"
                fieldClass="FormField"
                inputClass="FormInput"
                {...register("passwordConfirmation")}
                errors={ errors.passwordConfirmation?.message }
            />

            <Button
            type="submit"
            className="OrdinaryButton"
            disabled={ loading }
            >
                { loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
        </StyledForm>
    )
}