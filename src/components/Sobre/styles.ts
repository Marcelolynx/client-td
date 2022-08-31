import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  display: flex;
  max-width: ${theme.grid.container};
  margin: 50px auto;
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

export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-left: ${theme.spacings.small};

  ${media.lessThan('medium')`
    padding-left: 0px;
  `}
`

export const Title = styled.h3`
  font-size: ${theme.font.sizes.xlarge};
  font-weight: 600;
  line-height: 95%;
  padding: 20px 0;

  ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    margin-left: 5px;
  `}
`

export const Description = styled.p`
  font-size: ${theme.font.sizes.medium};
  font-weight: 300;
  text-align: left;

  ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
    margin-left: 5px;
`}
`
