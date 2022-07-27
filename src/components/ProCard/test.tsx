import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import ProCard from '.'

const props = {
  title: 'Glauco Rocha',
  description: 'Acupuntura, Análise comportamental',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<ProCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProCard {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.description })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
  it('should render price in label', () => {
    renderWithTheme(<ProCard {...props} />)
    const price = screen.getByText('R$ 235,00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })
  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<ProCard {...props} promotionalPrice="R$ 15,00" />)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<ProCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<ProCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <ProCard
        {...props}
        ribbon="Destaque"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/Destaque/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
