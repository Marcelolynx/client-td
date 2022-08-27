import * as S from './styles'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

export type TerapeutaInfoProps = {
  title: string
  description: string
  price: string
}

const TerapeutaInfo = ({ title, description, price }: TerapeutaInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{price}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper></S.ButtonsWrapper>
  </S.Wrapper>
)

export default TerapeutaInfo
