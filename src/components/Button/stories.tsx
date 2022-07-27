import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as unknown as Meta
export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Assine Agora'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Assine Agora',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Assine Agora',
  as: 'a',
  href: '/Link'
}
