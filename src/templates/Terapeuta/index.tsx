import Base from 'templates/Base'
import * as S from './styles'

export type TerapeutaTemplateProps = {
  cover: string
}

const Terapeuta = ({ cover }: TerapeutaTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
  </Base>
)

export default Terapeuta
