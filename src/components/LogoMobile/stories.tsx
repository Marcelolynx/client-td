import { Story, Meta } from '@storybook/react'
import { LogoProps } from 'components/LogoMobile'
import LogoMobile from '.'

export default {
  title: 'LogoMobile',
  component: LogoMobile
} as Meta

export const Default: Story<LogoProps> = (args) => <LogoMobile {...args} />
