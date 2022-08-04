import { render, screen } from '@testing-library/react'

import Terapeuta from '.'

describe('<Terapeuta />', () => {
  it('should render the heading', () => {
    const { container } = render(<Terapeuta />)

    expect(screen.getByRole('heading', { name: /Terapeuta/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
