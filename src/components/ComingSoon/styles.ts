import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`

export const LogoWhite = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  padding: 0;
  ${media.lessThan('medium')`
    height: 15%;
  `}
`

export const Call = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.white};
    margin: 25px;

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
  `}
    p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    }
  `}
`
