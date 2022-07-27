import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  width: 1400px;
  height: 310px;
  display: flex;
  align-content: flex-start;
  color: ${theme.colors.primary};
  justify-content: start;
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
