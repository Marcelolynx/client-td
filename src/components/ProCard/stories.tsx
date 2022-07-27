import { Story, Meta } from '@storybook/react'
import ProCard, { ProCardProps } from '.'

export default {
  title: 'ProCard',
  component: ProCard,
  args: {
    title: 'Nome Profissional',
    description: 'Especialidades',
    img: 'https://www.vittude.com/blog/wp-content/uploads/diferenca-entre-terapeuta-e-psicologo-764x457.jpeg',
    price: 'R$ 100,00',
    promotionalPrice: 'R$ 50,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<ProCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ProCard {...args} />
  </div>
)
