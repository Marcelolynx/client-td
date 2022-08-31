import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const List = styled.ul`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: ${theme.spacings.small} auto;
    text-transform: uppercase;
    padding: ${theme.spacings.small} 0 0;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.small} ${theme.spacings.xsmall} 0;
      column-count: 2;
    `}

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small} ${theme.spacings.xsmall} 0;
      column-count: 3;
    `}

    ${media.greaterThan('large')`
      column-count: 4;
    `}
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.primary};
    list-style: none;
    padding-left: ${theme.spacings.small};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
