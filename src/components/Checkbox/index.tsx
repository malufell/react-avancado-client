import { useState } from 'react'
import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

// htmlFor serve para falar a qual input a label pertence, assim ao clicar na label seleciona o input
// outra opção é colocar o input dentro da label, assim não precisa linkar com o id
const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked //vai inverter o boolean do checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  // onChange e checked são eventos que todos os inputs do HTML possuem já por padrão
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        //pra passar as outras possíveis propriedades de value (aquelas padrão que o usuário poderá usar)
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
