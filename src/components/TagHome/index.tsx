import { Container } from 'components/Container'
import * as S from './styles'

export type TagProps = { therapyKind: string[] }

const TagHome = ({ therapyKind }: TagProps) => {
  return (
    <Container>
      <S.List>
        {therapyKind.map((kind, index) => (
          <S.Item key={index}>{kind}</S.Item>
        ))}
      </S.List>
    </Container>
  )
}

export default TagHome
