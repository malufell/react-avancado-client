import * as S from './styles'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

//pra utilizar o "as" no componente, ora será link, ora será button (as polimorfismo)
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

//ficou dentro da tag span pois pode ter um texto ou ícone dentro dele
const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props //para o caso de passarmos mais propriedades no futuro
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
