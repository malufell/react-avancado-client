import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  // hook tests (não tem a ver com hook do react, serve pra fazer uma ação antes ou depois de alguma coisa)
  beforeEach(() => {
    //beforeEach: tudo que eu criar aqui poderá ser usado em todos os testes seguintes
    //'data-testid é um id que facilita a seleção do elemento no teste, mais aplicável para elementos que não serão renderizados
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })
  //se eu não passar nada, o elemento ficará escondido "none"
  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
