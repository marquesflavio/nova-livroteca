import { InputHTMLAttributes } from 'react'
import { SearchInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({...rest}): InputProps{
    return(
        <SearchInput
            {...rest}
        />
    )
}