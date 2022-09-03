import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
  between?: breakpoint[]
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `,

  between: (sizes: breakpoint[]) => css`
    ${media.between(sizes[0], sizes[1])` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan, between }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
    ${!!between && mediaMatchModifiers.between(between)}
  `}
`
