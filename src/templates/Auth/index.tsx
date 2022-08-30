import Heading from 'components/Heading'
import Logo from 'components/Logo'
import LogoMobile from 'components/LogoMobile'
import * as S from './styles'
import Link from 'next/link'

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
            <LogoMobile />
          </a>
        </Link>

        <div>
          <Heading color="white" size="huge">
            Os melhores terapeutas
            <br /> em um só lugar
          </Heading>
          <S.Subtitle>
            <strong>Terapia de Todos</strong>
            <br /> O Melhor Clube de Benefícios do Brasil.
          </S.Subtitle>
        </div>
        <S.Footer>
          Terapia de Todos 2022 © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" />
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
