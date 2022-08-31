import Heading from 'components/Heading'
import { Container } from 'components/Container'
import Blog, { BlogProps } from 'components/Blog'
import CartList, { CartListProps } from 'components/CartList'
import { Divider } from 'components/Divider'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedBlog: BlogProps[]
} & CartListProps

const Cart = ({ items, total }: CartProps) => (
  <Base>
    <S.Container>
      <Heading lineLeft lineColor="secondary">
        Dados de pagamento
      </Heading>
      <S.Content>
        <CartList items={items} total={total} />
      </S.Content>
      <Divider />
      <S.Recomended>
        <Blog />
      </S.Recomended>
    </S.Container>
  </Base>
)

export default Cart
