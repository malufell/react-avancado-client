import theme from 'styles/theme'

// inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

//esse é um arquivo de declaração, serve para que o styled components entenda que eu tenho um tema criado
//agora o tipo "DefaultTheme" tem acesso a todas as declarações que eu criei no arquivo 'theme'
