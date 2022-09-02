import BannerBusca from 'components/BannerBusca'
import Beneficios from 'components/Beneficios'
import { TCardPrices } from 'components/CardPrices'
import { Container } from 'components/Container'
import Plans from 'components/Plans'
import Highlight, { HighlightProps } from 'components/Highlight'
import Sobre from 'components/Sobre'
import TagHome, { TagProps } from 'components/TagHome'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  tagsMock: TagProps['therapyKind']
  highlightMock: HighlightProps
  cardPricesMock: TCardPrices[]
}

const Home = ({
  tagsMock,
  highlightMock,
  cardPricesMock
}: HomeTemplateProps) => (
  <Base>
    <Highlight {...highlightMock} />

    <Container>
      <Sobre />
    </Container>

    <Container>
      <Beneficios />
    </Container>

    <Container>
      <Plans plans={cardPricesMock} />
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
