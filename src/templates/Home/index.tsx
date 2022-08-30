import BannerBusca from 'components/BannerBusca'
import Beneficios from 'components/Beneficios'
import { Container } from 'components/Container'
import Cta from 'components/Cta'
import Hero from 'components/Hero'
import Sobre from 'components/Sobre'
import TagHome, { TagProps } from 'components/TagHome'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  tagsMock: TagProps['therapyKind']
}

const Home = ({ tagsMock }: HomeTemplateProps) => (
  <Base>
    <Container>
      <Hero />
    </Container>

    <Container>
      <Sobre />
    </Container>

    <Container>
      <Beneficios />
    </Container>

    <Container>
      <Cta />
    </Container>

    <Container>
      <BannerBusca />
    </Container>

    <Container>
      <TagHome therapyKind={tagsMock} />
    </Container>
  </Base>
)

export default Home
