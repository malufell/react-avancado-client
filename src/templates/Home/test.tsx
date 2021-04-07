import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    //pega um teste que só existe no footer, pra ver se ele consta na home
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument()
  })
})
