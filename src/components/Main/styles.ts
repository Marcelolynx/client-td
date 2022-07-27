import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  background-color: white;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${theme.colors.black};
  font-size: ${theme.font.sizes.medium};
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
