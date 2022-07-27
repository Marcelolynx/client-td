import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import LogoMobile from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<LogoMobile />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyle({ color: '#fff' })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<LogoMobile />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyle({ width: '11rem' })
  })

  it('should render a Normal logo', () => {
    renderWithTheme(<LogoMobile size="large" />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyle({ width: '20rem' })
  })

  it('should render a Big logo without text if hideOnMobile', () => {
    renderWithTheme(<LogoMobile hideOnMobile />)
    expect(
      screen.getByLabelText(/Terapia de Todos/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
