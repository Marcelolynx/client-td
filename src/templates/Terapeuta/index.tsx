import TerapeutaInfo, { TerapeutaInfoProps } from 'components/TerapeutaInfo'
import Base from 'templates/Base'

import * as S from './styles'

export type TerapeutaTemplateProps = {
  cover: string
  terapeutaInfo: TerapeutaInfoProps
  price: string
  description: string
  title: string
  img: string
}

const Terapeuta = ({
  cover,
  price,
  description,
  title,
  img
}: TerapeutaTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Wrapper>
      <TerapeutaInfo
        title={title}
        description={description}
        price={price}
        img={img}
      />
    </S.Wrapper>
  </Base>
)

export default Terapeuta
