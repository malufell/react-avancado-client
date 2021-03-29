import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

//keyof serve para pegar todas os atributos do objeto, sem que eu precise digitar todos os eles no uso no meu type
type breakpoint = keyof DefaultBreakpoints

//esses types "breakpoint" são da biblioteca 'styled-media-query'
export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
