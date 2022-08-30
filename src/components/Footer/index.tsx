import Logo from 'components/Logo'
import Link from 'next/link'
import Heading from 'components/Heading'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="primary">
          Contato
        </Heading>

        <a href="mailto:ola@terapiadetodos.com.br">ola@terapiadetodos.com.br</a>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="primary" lineBottom size="small">
          Links
        </Heading>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profissionais">
          <a>Profissionais</a>
        </Link>
        <Link href="/paraTerapeuta">
          <a>Para Terapeutas</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="primary" lineBottom size="small">
          Nossas Políticas
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Política de Privacidade</a>
          </Link>
          <Link href="/games">
            <a>Política de Cookies</a>
          </Link>
          <Link href="/search">
            <a>Termos de Uso</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="primary" lineBottom size="small">
          Siga-nos
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
    </S.Content>

    <S.Copyright>
      Terapia de Todos 2022 © Todos os Direitos reservados.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
