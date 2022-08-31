import Link from 'next/link'
import * as S from './styles'

const BannerBusca = () => {
  return (
    <S.Container>
      <S.Title>Você Precisa de qual terapia hoje?</S.Title>
      <Link href="/sign-up" passHref>
        <S.Link>Encontre Terapeutas perto de você.</S.Link>
      </Link>
    </S.Container>
  )
}

export default BannerBusca
