import { render, screen } from '@testing-library/react'

import Blog from '.'

describe('<Blog />', () => {
  it('should render the heading', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { name: /Blog/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
