import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    //margins auto pra centralizar o elemento no centro da tela
    margin-left: auto;
    margin-right: auto;
    //gutter é o espaçamento que corresponde ao espaço entre as colunas da gride
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
