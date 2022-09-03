import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import * as S from './styles'

export type PostProps = {
  title: string
  subtitle: string
  texto: string
}

const Post = () => (
  <Base>
    <Container>
      <S.Wrapper>
        <S.Content>
          <Grid>
            Post
            <h1>Titulo</h1>
            <h1>Subtitle</h1>
          </Grid>
          <S.Sidebar>
            <banner>Adsense</banner>
          </S.Sidebar>
        </S.Content>
      </S.Wrapper>
    </Container>
  </Base>
)

export default Post
