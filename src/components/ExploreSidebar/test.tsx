import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'
import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('heading', { name: /preço/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /ordenar por/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /terapias/i })
    ).toBeInTheDocument()

    it(' should render inputs', () => {
      renderWithTheme(<ExploreSidebar items={items} />)

      expect(
        screen.getByRole('checkbox', { name: /menor que \$50/i })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('radio', { name: /low to high/i })
      ).toBeInTheDocument()
    })

    it('should render the filter button', () => {
      renderWithTheme(<ExploreSidebar items={items} />)

      expect(
        screen.getByRole('button', { name: /filter/i })
      ).toBeInTheDocument()
    })

    it('should check initial values that are passed', () => {
      renderWithTheme(
        <ExploreSidebar
          items={items}
          initialValues={{ remoto: true, sort_by: 'low-to-high' }}
        />
      )

      expect(screen.getByRole('checkbox', { name: /remoto/i })).toBeChecked()
      expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
    })
  })
})
