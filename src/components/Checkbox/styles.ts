import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    //tira a aparência original e feia do input
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    //por padrão o checkbox tem uma borda, por isso ela foi removida
    //mas sempre que tirar é obrigatório definir o focus
    outline: none;

    //é a formatação do 'check' dentro da caixinha
    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }
    //coloca a sombra no elemento quando ele é selecionado
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    //serve pra não mudar o tamanho da caixinha em função do texto na label
    line-height: 1.8rem;
  `}
`
