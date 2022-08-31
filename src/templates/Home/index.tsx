import BannerBusca from 'components/BannerBusca'
import Beneficios from 'components/Beneficios'
import { Container } from 'components/Container'
import Cta from 'components/Cta'
import Highlight, { HighlightProps } from 'components/Highlight'
import Sobre from 'components/Sobre'
import TagHome, { TagProps } from 'components/TagHome'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  tagsMock: TagProps['therapyKind']
  highlightMock: HighlightProps
}

const Home = ({ tagsMock, highlightMock }: HomeTemplateProps) => (
  <Base>
    <Highlight {...highlightMock} />

    <Container>
      <Sobre />
    </Container>

    <Container>
      <Beneficios />
    </Container>

    {/* <Container>
      <Cta />
    </Container> */}

    <Container>
      <BannerBusca />
    </Container>

    <Container>
      <TagHome therapyKind={tagsMock} />
    </Container>
  </Base>
)

export default Home
