import * as yup from "yup"

export const LoginSchema = yup.object().shape({

    email: 
        yup.string()
        .email()
        .required("Campo Obrigatório!"),

    password:
        yup.string()
        .required("Campo Obrigatório!")
        .min(5, "Minimo de 5 Caracteres!")
})