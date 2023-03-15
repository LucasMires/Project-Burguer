import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    name:
        yup.string()
        .required("Campo Obrigatório!")
        .min(3, "Minimo de 3 Caracteres"),

    email:
        yup.string()
        .required("Campo Obrigatório!")
        .email("Email inválido!"),

    password:
        yup.string()
        .required("Campo Obrigatório!")
        .min(8, "Minimo de 8 Caracteres")
        .matches(/(?=.*[a-z])/, "Mínimo de uma letra Minúscula!")
        .matches(/(?=.*[A-Z])/, "Mínimo de uma letra Maiuscula!")
        .matches(/(?=.*?[#?!@$%^&*-])/, "Minimo de um Caracter Especial!"),
    
    passwordConfirmation:
        yup.string()
        .required("Campo Obrigatório!")
        .oneOf([yup.ref("password")], "Senhas não Coincidem!"),
})