import { Story, Meta } from '@storybook/react/types-6-0'

import { ProCardProps } from 'components/ProCard'
import TerapeutaCardSlider from '.'

const items = [
  {
    title: 'Jean de Oliveira',
    developer: 'Reflexoterapia',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: '235,00',
    promotionalPrice: '215,00'
  },
  {
    title: 'Elisângela da Silva Rocha Duarte',
    developer: 'Reflexoterapia',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: '235,00',
    promotionalPrice: '215,00'
  },
  {
    title: 'Bernadete Candeo',
    developer: 'Reflexoterapia',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: '235,00',
    promotionalPrice: '215,00'
  },
  {
    title: 'Antonio Marcos Venceslau',
    developer: 'Bioressonancia Quantica',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: '235,00',
    promotionalPrice: '215,00'
  },
  {
    title: 'Cassia Venceslau',
    developer: 'Reflexoterapia',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: '235,00',
    promotionalPrice: '215,00'
  },
  {
    title: 'Caroline Galmarino Batista',
    developer: 'Reflexoterapia',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: '235,00',
    promotionalPrice: '215,00'
  }
]

export default {
  title: 'TerapeutaCardSlider',
  component: TerapeutaCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ProCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <TerapeutaCardSlider items={args} {...args} />
  </div>
)
