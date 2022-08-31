import * as S from './styles'

export type BlogProps = {
  title: string
  subtitle: string
}

const Blog = () => (
  <S.Wrapper>
    <S.Content>
      <h1>Título</h1>
      <h2>SubTitulo</h2>
      <text>Texto</text>
    </S.Content>
  </S.Wrapper>
)

export default Blog
