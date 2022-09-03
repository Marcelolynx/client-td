import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import TerapeutaCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    description: 'Population Zero é um jogo de sobrevivência em mundo aberto'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    description: 'Population Zero é um jogo de sobrevivência em mundo aberto'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    description: 'Population Zero é um jogo de sobrevivência em mundo aberto'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    description: 'Population Zero é um jogo de sobrevivência em mundo aberto'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    description: 'Population Zero é um jogo de sobrevivência em mundo aberto'
  }
]

describe('<TerapeutaSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<TerapeutaCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
