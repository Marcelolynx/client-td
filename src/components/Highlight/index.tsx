import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  description,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper>
    <S.HighlightWrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.HighlightWrapper>
  </S.Wrapper>
)

export default Highlight
