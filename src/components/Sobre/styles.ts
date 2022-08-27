import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  max-width: ${theme.grid.container};
  height: 310px;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  align-content: center;
  ${media.lessThan('medium')`
      flex-direction: column;
      max-width: 540px;
      height: 600px;
    `}
`

export const Illustration = styled.img`
  width: 525px;
  height: 310px;
  display: flex;
  align-items: flex-start;
  ${media.lessThan('medium')`
     width: 500px;
     height: 300px;
    `}
`

export const TextBeneficios = styled.div`
  color: ${theme.colors.primary};

  span {
    display: block;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 600;
    line-height: 95%;
    padding: 20px 0 20px;
    text-align: left;
    margin-left: 50px;
    margin-bottom: 30px;
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    margin-left: 5px;
    `}
  }

  h3 {
    font-size: ${theme.font.sizes.medium};
    font-weight: 300;
    text-align: left;
    margin-left: 50px;
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
    margin-left: 5px;
    `}
  }
`
