import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  margin-top: 20rem;
  ${media.greaterThan('medium')`
    margin-top: 58rem;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 36.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 50rem;
    `}
  `}
`
