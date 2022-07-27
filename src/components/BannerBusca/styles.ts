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
  background-image: url('/img/Background-Hero.jpg');
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: ${theme.colors.white};
    align-self: center;
    font-size: ${theme.font.sizes.xlarge};
  }

  a {
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    align-self: center;
    cursor: pointer;
  }
`

export const TextSearch = styled.h2``
