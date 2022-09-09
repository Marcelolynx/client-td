import { render, screen } from '@testing-library/react'

import BannerAdsense from '.'

describe('<BannerAdsense />', () => {
  it('should render the heading', () => {
    const { container } = render(<BannerAdsense />)

    expect(
      screen.getByRole('heading', { name: /BannerAdsense/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
