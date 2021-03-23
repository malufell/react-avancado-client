import { render, screen } from '@testing-library/react'

import Main from '.'

//describe: onde descrevo o que vou começar a testar
describe('<Main />', () => {
  //it: serve para começar a escrever bloco de teste
  it('should render the heading', () => {
    const { container } = render(<Main />) //renderiza o componente

    //informo o que espero com o teste
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    //vai buscar o componente e espera que ele seja encontrado no document (dom)

    //snapshot cria um arquivo com o bloco de código que foi testado. é mais uma camada de segurança de que está tudo certo. depois se eu alterar o elemento e testar de novo, ele não vai deixar passar sem confirmação (nesse caso o snapshot atualiza para nova versão)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    //exemplo de que é possível testar estilos também
    //é útil pra testar se muda o estilo conforme alguma ação do usuário
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
