import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished' //biblioteca do styled-componentes que ajuda com as cores

import { RibbonProps, RibbonColors } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
    //before é o "triangulo" depois do retângulo
    //darken é da lib que auxilia com a cor, escurece a cor do tema em 0.2
    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    //-2 é pra deixar o ribbon "pra fora" do elemento que está atrás dele
    right: -2rem;
    //são esses "border" que dão o efeito de triângulo no ribbon
    &::before {
      top: 3.6rem; //distância do topo do ribbon
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    position: absolute; //em relação à div que engloba ele, assim ele pode ficar no canto do elemento
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    &::before {
      content: '';
      position: absolute; //em relação ao ribbon
      right: 0; //pra ficar no final do ribbon
      border-style: solid;
      border-left-width: 0rem; //pra não ter nenhuma borda na esquerda
      border-right-color: transparent; //pra não aparecer o quadrado cinza da borda solid
      border-bottom-color: transparent; //pra não aparecer o quadrado cinza da borda solid
      border-bottom-width: 1rem;
    }
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
