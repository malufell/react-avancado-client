import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all the components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )
    //logo
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    //heading banner
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    //subtítulo
    expect(
      screen.getByRole('heading', {
        name: /A WON é a melhor e mais completa plataforma de games./i
      })
    ).toBeInTheDocument()

    //heading content
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()

    //children - pegando o input que foi passado (input é role texbox)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
  })
})
