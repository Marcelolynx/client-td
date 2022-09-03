import { Story, Meta } from '@storybook/react'
import Blog from '.'

export default {
  title: 'Blog',
  component: Blog
} as Meta

export const Default: Story = () => <Blog />
