import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: ${theme.grid.container};
  margin: 50px auto;
  display: flex;
  align-content: center;
  color: ${theme.colors.primary};
  justify-content: center;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Illustration = styled.img`
  max-width: 525px;
  max-height: 310px;
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin-left: ${theme.spacings.xsmall};
  font-weight: bold;
  font-size: ${theme.font.sizes.xlarge};

  ${media.greaterThan('medium')`
    padding-left: 20px;
  `}
`

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  height: 50px;
  width: 200px;
  font-size: ${theme.font.sizes.xlarge};
  border-radius: 20px;
  margin-top: 25px;
  font-weight: bold;
  border: none;

  ${media.lessThan('medium')`
    align-self: center;
    height: 40px;
    border-radius: 20px;
    width: 200px;
    font-size: 16px;
  `}
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  p {
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
      margin-bottom: 10px;
    `}
  }
`

export const Icons = styled.img`
  height: 49px;
  width: 49px;
  margin: 0 10px 10px 0;

  ${media.lessThan('medium')`
    height: 25px;
    width: 25px;
    margin: 0 10px 10px 0;
  `}
`
