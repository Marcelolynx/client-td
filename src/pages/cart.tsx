import Cart, { CartProps } from 'templates/Cart'
import itemsMock from 'components/CartList/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: 'R$ 430,00'
    }
  }
}
