import { render, screen } from '@testing-library/react'

import Profissionais from '.'

describe('<Profissionais />', () => {
  it('should render the heading', () => {
    const { container } = render(<Profissionais />)

    expect(screen.getByRole('heading', { name: /Profissionais/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
