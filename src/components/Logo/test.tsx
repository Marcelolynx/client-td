import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyle({ color: '#fff' })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyle({ width: '11rem' })
  })

  it('should render a Normal logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyle({ width: '20rem' })
  })

  it('should render a Big logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
