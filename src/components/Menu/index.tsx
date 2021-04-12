import Link from 'next/link'
import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

// O menu é composto por 4 elementos (3 ícones e a logo). Cada um deles precisa estar dentro de uma div (wrapper) para que seja possível dimensionar os tamanhos e aplicar formatação, por isso aqui no componente cada elemento está dentro de um componente de estilo
const Menu = ({ username }: MenuProps) => {
  //começa como false pq inicialmente o menu não está aberto, então o método setIsOpen serve para abrir o menu
  const [isOpen, setIsOpen] = useState(false)

  //para versão desktop foi usado o meu componente helper MediaMatch
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        {/* true indica que o menu irá abrir */}
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      {/* MenuGroup junta os dois ícones que ficam no canto direito */}
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      {/* aria-hidden indica que o menu está escondido assim o leitor de tela ignora*/}
      {/* usa uma negação pq pra ser "true" precisa ser o contrário do estado inicial, que é false*/}
      {/* isOpen={isOpen} é passado aqui pra eu usar no style */}
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth size="large">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
