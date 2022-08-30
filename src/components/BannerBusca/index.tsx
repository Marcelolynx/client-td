import Link from 'next/link'
import * as S from './styles'

const BannerBusca = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextSearch>Você Precisa de qual terapia hoje?</S.TextSearch>
        <Link href="/sign-up" passHref>
          <a>Encontre Terapeutas perto de você.</a>
        </Link>
      </S.Container>
    </S.Wrapper>
  )
}

export default BannerBusca
