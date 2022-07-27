import { render, screen } from '@testing-library/react'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = render(<Ribbon>Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    render(<Ribbon>Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    render(<Ribbon size="small">Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
