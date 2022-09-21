import Link from 'next/link'
import * as S from './styles'

const BannerBusca = () => {
  return (
    <S.Container>
      <S.Title>Você precisa de qual terapia hoje?</S.Title>
      <Link href="/profissionais" passHref>
        <S.Link>Encontre Terapeutas perto de você</S.Link>
      </Link>
    </S.Container>
  )
}

export default BannerBusca
