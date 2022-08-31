import * as S from './styles'

export type TagProps = { therapyKind: string[] }

const TagHome = ({ therapyKind }: TagProps) => {
  return (
    <S.List>
      {therapyKind.map((kind, index) => (
        <S.Item key={index}>{kind}</S.Item>
      ))}
    </S.List>
  )
}

export default TagHome
