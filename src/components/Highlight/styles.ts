import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

//pick pra buscar só as duas propriedades que iremos utilizar no estilo
type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content'; //é a ordem do conteúdo na grid
    grid-template-columns: 1.3fr 2fr; //fr é fração, 33% pra imagem e 66% pro content
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
    ${FloatImage} {
      justify-self: end; //joga a imagem pro final do espaço na grid (é horizontal)
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    display: grid;

    &::after {
      content: ''; //isso serve pro elemento aparecer na tela
      position: absolute; //pra ficar fixado em cima do wrapper
      width: 100%;
      height: 100%;
      background-color: rgba(
        0,
        0,
        0,
        0.6
      ); //vai escurecer a imagem de fundo, melhorando a exibição do texto
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`
export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers
      .base}; //pra deixar na frente da camada mais escura, igual o Content
    max-height: 23rem;
    max-width: 100%;
    align-self: end; //deixa a imagem sempre alinhada embaixo
    ${media.greaterThan('medium')`
      max-height: 32rem; //pra imagem acompanhara altura do wrapper no desktop
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    //isso serve pra deixar os elementos na frente da camada que deixa o fundo mais escuro (after do wrapper)
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end; //alinha embaixo
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

export const Subtitle = styled.h3`
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
