import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: ${theme.grid.container};
  margin: 0 auto;
  height: 310px;
  display: flex;
  align-content: flex-start;
  color: ${theme.colors.primary};
  justify-content: start;

  ${media.lessThan('medium')`
  width: 748px;

  `}
`
export const Container = styled.div`
  width: 1400px;
  height: 250px;
  background-image: url('/img/Background-Hero.jpg');
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  ${media.lessThan('medium')`
  width: 540px;
  margin: 10px;

  `}

  h2 {
    color: ${theme.colors.white};
    align-self: center;
    font-size: ${theme.font.sizes.huge};
    ${media.lessThan('medium')`
  font-size: ${theme.font.sizes.large};

  `}
  }

  a {
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    align-self: center;
    cursor: pointer;
    ${media.lessThan('medium')`
  font-size: ${theme.font.sizes.medium};
  `}
  }
`

export const TextSearch = styled.h2``
