import styled, { css } from 'styled-components'

//auto-fill vai preenchendo automaticamente os espaços que tem pra coluna
//minmax fala o tamanho mínimo e o tamanho máximo do card
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`
