import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">Seus jogos favoritos em um só lugar</Heading>
          <S.BannerSubTitle>
            A <strong>WON</strong> é a melhor e mais completa plataforma de
            games.
          </S.BannerSubTitle>
        </div>

        <S.BannerFooter>
          Won Games 2020 © Todos os Direitos Reservados
        </S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
