import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { MenuFullProps } from 'components/Menu/styles'

export const Wrapper = styled.div<MenuFullProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    overflow: ${isOpen ? 'hidden' : 'auto'};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxsmall} * 2);
    `}
  `}
`
