import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExplorerSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  }
} as Meta

export const Default: Story<ExplorerSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValues: Story<ExplorerSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ orde: true, sort_by: 'do maior valor' }}
    />
  </div>
)
