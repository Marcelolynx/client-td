import BannerBusca from 'components/BannerBusca'
import Beneficios from 'components/Beneficios'
import { Container } from 'components/Container'
import Cta from 'components/Cta'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import Menu from 'components/Menu'
import Sobre from 'components/Sobre'
import TagHome from 'components/TagHome'

const Home = () => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

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
        <TagHome />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
