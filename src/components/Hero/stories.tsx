import { Story, Meta } from '@storybook/react'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Hero {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Hero {...args} />
