import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 1.3fr 2fr;

    ${media.lessThan('medium')`
      grid-template-areas: 'content';
      grid-template-columns: 1fr;
    `}

    ${Content} {
      text-align: left;
      align-self: center;
    }

    ${FloatImage} {
      justify-self: end;

      ${media.lessThan('medium')`
        display: none;
      `}
    }
  `
}

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.grid.container};
  `}
`

export const HighlightWrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    border-radius: 40px;
    position: relative;
    height: 516px;
    display: grid;
    background-image: url(${backgroundImage});

    ${wrapperModifiers[alignment!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 30rem;
    margin-right: 80px;
    max-width: 100%;
    align-self: flex-end;

    ${media.greaterThan('medium')`
      max-height: 50rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`
