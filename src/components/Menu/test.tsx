import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { fireEvent } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Terapia de Todos/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render the open/close menu', () => {
    renderWithTheme(<Menu />)

    // select our MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // check if Menu hiden
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // click on Button and check if Menu is open
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // click on Button and check if Menu is close
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
