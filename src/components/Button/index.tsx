import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  //para o futuro quando formos capturar click do mouse (agora não ta fazendo nada)
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

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
