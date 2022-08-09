import { render, screen } from '@testing-library/react'

import ComingSoon from '.'

describe('<ComingSoon />', () => {
  it('should render the heading', () => {
    const { container } = render(<ComingSoon />)

    expect(screen.getByRole('heading', { name: /ComingSoon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
