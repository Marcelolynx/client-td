import { Story, Meta } from '@storybook/react/types-6-0'
import ListItem, { ListItemProps } from '.'
export default {
  title: 'ListItem',
  component: ListItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Walter Michael Vásquez Ortega',
    price: 'R$ 215,00'
  }
} as Meta
export const Default: Story<ListItemProps> = (args) => <ListItem {...args} />
export const WithPayment: Story<ListItemProps> = (args) => (
  <ListItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'compra realizada em on 07/20/2020 at 20:32'
  }
}
