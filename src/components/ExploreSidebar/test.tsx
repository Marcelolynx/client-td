import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'
import ExploreSidebar from '.'
import userEvent from '@testing-library/user-event'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /preço/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /ordenar por/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /terapias/i })
    ).toBeInTheDocument()

    it(' should render inputs', () => {
      renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

      expect(
        screen.getByRole('checkbox', { name: /menor que \$50/i })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('radio', { name: /low to high/i })
      ).toBeInTheDocument()
    })

    it('should render the filter button', () => {
      renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

      expect(
        screen.getByRole('button', { name: /filter/i })
      ).toBeInTheDocument()
    })

    it('should check initial values that are passed', () => {
      renderWithTheme(
        <ExploreSidebar
          items={items}
          initialValues={{ remoto: true, sort_by: 'low-to-high' }}
          onFilter={jest.fn}
        />
      )

      expect(screen.getByRole('checkbox', { name: /remoto/i })).toBeChecked()
      expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
    })

    it('should filter with initial values', () => {
      const onFilter = jest.fn()
      renderWithTheme(
        <ExploreSidebar
          items={items}
          initialValues={{ remoto: true, sort_by: 'low-to-high' }}
          onFilter={onFilter}
        />
      )

      userEvent.click(screen.getByRole('button', { name: /filter/i }))

      expect(onFilter).toBeCalledWith({ remoto: true, sort_by: 'low-to-high' })
    })

    it('should filter with checked values', () => {
      const onFilter = jest.fn()

      renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

      userEvent.click(screen.getByLabelText(/remoto/i))
      userEvent.click(screen.getByLabelText(/presencial/i))
      userEvent.click(screen.getByLabelText(/low to high/i))

      userEvent.click(screen.getByRole('button', { name: /filter/i }))

      expect(onFilter).toBeCalledWith({
        windows: true,
        linux: true,
        sort_by: 'low-to-high'
      })
    })
  })
})
