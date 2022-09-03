import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { HomeProvider, useHome } from 'contexts/HomeContext'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { menuIsOpen } = useHome()

  return (
    <HomeProvider>
      <S.Wrapper isOpen={menuIsOpen}>
        <Container>
          <Menu />
        </Container>

        <S.Content>{children}</S.Content>

        <S.SectionFooter>
          <Container>
            <Footer />
          </Container>
        </S.SectionFooter>
      </S.Wrapper>
    </HomeProvider>
  )
}

export default Base
