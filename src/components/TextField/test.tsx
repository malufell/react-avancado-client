import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'

import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  // FUNÇÃO
  it('Changes its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      //verifica se a função foi chamada no nº de vezes do tamanho do texto
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  // ACESSIBILIDADE

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  // ÍCONES

  it('should render an icon version', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument() //verifica se tem um ícone
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  // DISABLED

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    //testa se mesmo se o usuário tentar passar um valor no input, a função não será chamada
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  // EXIBIÇÃO DE ERROS

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
