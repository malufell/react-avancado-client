import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative; //isso é pra logo ficar absoluta em relação ao menu
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')` //será aplicado só no mobile
    position: absolute; //deixar a logo fixada no lugar
    left: 50%; //mover 50% a esquerda da div
    transform: translateX(-50%); //indica que será alinhado na metade do próprio tamanho da logo
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

//para os dois ícones que ficam no canto direito
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex; //deixa os dois ícones lado a lado
    flex-grow: 1; //faz o icone ocupar o espaço máximo que tiver
    justify-content: flex-end; //alinha no final da div
    align-items: center;
    //os ícones são div
    > div {
      margin-left: ${theme.spacings.xsmall}; //dá um espaço entre os ícones
    }
  `}
`
export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      //sublinhado que fica embaixo do elemento quando passa o mouse
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column; //deixa toda info do menu em uma coluna
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0; //borda
    bottom: 0; //borda
    left: 0; //borda
    right: 0; //borda
    height: 100vh; //pra ter a altura da tela inteira
    overflow: hidden; //pra não ter scroll no próprio menu
    transition: opacity 0.3s ease-in-out; //transição suave da aparição do menu
    opacity: ${isOpen ? 1 : 0}; //opacidade zero esconde o menu da tela
    //se o menu estiver aberto, poderei clicar
    pointer-events: ${isOpen ? 'all' : 'none'};
    //svg corresponde ao icone "fechar" do menu
    //pega o primeiro filho svg do componente (se tiver outro não pega)
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    //é onde está os links de navegação do menu ('home' e 'explore')
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    //estiliza os links do menu que estão dentro do menu full
    //(se estiver na versão desktop, está fora do menu full e não pega essa formatação)
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      //animação que sobe e desce os elementos quando abre o menu
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    //animação que sobe e desce os elementos quando abre o menu
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
//div que contém opção de login ou cadastro
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    //esse span é o texto "or" entre login e cadastre-se
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
//estilo do link "sign up"
export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
