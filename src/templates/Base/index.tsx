import { useSession } from 'next-auth/client'

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
  const [session, loading] = useSession()

  return (
    <HomeProvider>
      <S.Wrapper isOpen={menuIsOpen}>
        <Container>
          <Menu username={session?.user?.name} loading={loading} />
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
