import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

import { Container } from 'components/Container'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.grid.container};
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ShowMoreLoading = styled.img`
  width: 4rem;
`

export const ShowMoreButton = styled.button`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: transparent;
    border: none;
    padding: ${theme.spacings.xsmall};
    transition: color ${theme.transition.default};

    > svg {
      transition: color ${theme.transition.default};
      color: ${theme.colors.primary};
    }

    &:hover {
      color: ${darken(0.3, theme.colors.primary)};

      > svg {
        color: ${darken(0.2, theme.colors.primary)};
      }
    }
  `}
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`
