import { Story, Meta } from '@storybook/react/types-6-0'
import TerapeutaInfo, { TerapeutaInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'Terapeuta/TerapeutaInfo',
  component: TerapeutaInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta

export const Default: Story<TerapeutaInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <TerapeutaInfo {...args} />
  </div>
)
