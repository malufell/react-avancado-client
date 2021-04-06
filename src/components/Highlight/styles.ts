import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'
//pick pra buscar só as duas propriedades que iremos utilizar no estilo
type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

//é a ordem do conteúdo na grid
//fr é fração, 33% pra imagem e 66% pro content
const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }
    //joga a imagem pro final do espaço na grid (é horizontal)
    ${FloatImage} {
      justify-self: end;
    }
  `
}

//content no after serve pro elemento aparecer na tela
//after absolute pra ficar fixado em cima do wrapper
//bg-color vai escurecer a imagem de fundo, melhorando a exibição do texto
export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    display: grid;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    ${media.greaterThan('medium')`
      height: 32rem;
    `}
    ${wrapperModifiers[alignment!]()}
  `}
`
//z-index: pra deixar na frente da camada mais escura, igual o Content
//align-self deixa a imagem sempre alinhada embaixo
//media usado pra imagem acompanhar a altura do wrapper no desktop
export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;
    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`
//z-index serve pra deixar os elementos na frente da camada que deixa o fundo mais escuro (after do wrapper)

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
