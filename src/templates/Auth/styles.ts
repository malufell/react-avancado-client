import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh; //pra ocupar toda tela

  //pra deixar a imagem aparecendo apenas no desktop
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    //pra esconder o lado da imagem quando no mobile
    ${media.lessThan('medium')`
      display: none;
    `}

    //after é pra camada que escurece a imagem
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`
//a camada que escurece a imagem fica por cima de todo conteúdo, por isso é necessário envolver ele em uma div e trazer pra frente
//color aqui: pra deixar todo o texto branco
//sem o height o texto fica todo junto
export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};
  `}
`

export const BannerSubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center; //alinha na vertical
    justify-content: center; //alinha na horizontal
  `}
`

//pra criar um espaçamento entre os elementos, o wrapper da logo e do heading foram selecionados aqui!
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem; //pra não deixar o conteúdo muito esticado em tela grande

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.medium};
    }
  `}
`
