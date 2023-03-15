import { forwardRef, InputHTMLAttributes } from "react"
import { StyledFieldSet } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    errors?: string
    fieldClass?: string
    inputClass?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, type, placeholder, fieldClass, inputClass, disabled, errors, onChange, ...rest }, ref) => {
   
    return (
        <StyledFieldSet className={ fieldClass }>
            <label htmlFor={ id }>{ label }</label>
            <input 
                id={ id }
                type= { type }
                placeholder={ placeholder }
                disabled={ disabled }
                className={ errors ? "ErrorBorder" : inputClass }
                onChange={onChange}
                ref={ ref }
                {...rest}
            />
            { errors !== undefined && <p>{ errors }</p> }
        </StyledFieldSet>
    )
})
