import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
}

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
    <Footer />
  </div>
)
