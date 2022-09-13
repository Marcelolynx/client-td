import * as S from './styles'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import { Telephone } from 'styled-icons/bootstrap'
import { FavoriteBorder } from 'styled-icons/material-outlined'

export type TerapeutaInfoProps = {
  title: string
  description: string
  price: string
  img: string
}

const TerapeutaInfo = ({ title, description, price }: TerapeutaInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<Telephone />} size="large">
        Ver contato
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Favoritos
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default TerapeutaInfo
