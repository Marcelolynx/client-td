import { useEffect, useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import Logo from 'components/Logo'
import LogoMobile from 'components/LogoMobile'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

const breakPoint = 767

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('load', handleWindowResize)

    return () => window.removeEventListener('load', handleWindowResize)
  })

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>{width > breakPoint ? <Logo /> : <LogoMobile />}</a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink href="profissionais">Profissionais</S.MenuLink>
          <S.MenuLink href="/blog">Blog</S.MenuLink>
          <S.MenuLink href="/paraTerapeuta">Sou Terapeuta</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <Link href="/sign-up" passHref>
            <Button as="a">Cadastrar</Button>
          </Link>
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/profissionais" passHref>
            <S.MenuLink>Profissionais</S.MenuLink>
          </Link>
          {!!username && (
            <>
              <S.MenuLink href="#">Minha conta</S.MenuLink>
              <S.MenuLink href="#">Sair</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {isOpen && (
          <S.RegisterBox>
            <Link href="/sign-up" passHref>
              <Button fullWidth size="large" as="a">
                Login
              </Button>
            </Link>
            <span>OU</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Assine Agora">
                Assine Agora
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
