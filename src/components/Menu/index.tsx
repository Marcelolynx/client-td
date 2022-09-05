import { useEffect, useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import Logo from 'components/Logo'
import LogoMobile from 'components/LogoMobile'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import { useHome } from 'contexts/HomeContext'

const breakPoint = 768

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const { menuIsOpen, openMenu } = useHome()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWindowLoad = () => setWidth(window.innerWidth)
    window.addEventListener('load', handleWindowLoad)

    return () => window.removeEventListener('load', handleWindowLoad)
  }, [])

  return (
    <S.Wrapper>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={openMenu}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/home" passHref>
          <a>{width > breakPoint ? <Logo /> : <LogoMobile />}</a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="large">
        <S.MenuNav>
          <Link href="/home" passHref>
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

      <S.MenuFull aria-hidden={!menuIsOpen} isOpen={menuIsOpen}>
        <CloseIcon aria-label="Close Menu" onClick={openMenu} />

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

        {menuIsOpen && (
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
