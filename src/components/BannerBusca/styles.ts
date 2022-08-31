import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  max-width: ${theme.grid.container};
  background-image: url('/img/Background-Hero.jpg');
  align-content: center;
  justify-content: center;
  border-radius: 40px;
  height: 250px;
  flex-direction: column;
  margin: 4.6rem auto 0;

  ${media.lessThan('medium')`
    flex-direction: column;
    justify-content: center;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: min(${theme.font.sizes.huge}, 5vw);
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    align-self: center;
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      padding-left: 20px;
      align-self: auto;
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    cursor: pointer;
    align-self: center;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
      padding-left: 20px;
      align-self: auto;
    `}
  `}
`
