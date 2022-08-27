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
      flex-direction: column;
      max-width: 540px;
      height: 900px;
      margin: 10px;
      justify-content: center;
      align-items: center;
    `}
`
export const Container = styled.div`
  width: 1400px;
  height: 250px;
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  margin: 50px;
  ${media.lessThan('medium')`
      flex-direction: column;
      max-width: 540px;
      height: 1400px;
      margin: 10px;
      justify-content: center;
      align-items: center;
    `}

  li {
    list-style: none;
  }

  a {
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
    align-self: center;
    cursor: pointer;
    line-height: 3.5rem;
    font-weight: normal;
  }
`
