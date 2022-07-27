import BannerBusca from 'components/BannerBusca'
import Beneficios from 'components/Beneficios'
import Cta from 'components/Cta'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import Sobre from 'components/Sobre'
import TagHome from 'components/TagHome'
import Menu from 'components/Menu'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Menu />
    <Hero />
    <Sobre />
    <Beneficios />
    <Cta />
    <BannerBusca />
    <TagHome />
    <Footer />
  </S.Wrapper>
)

export default Main
