import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.article`
  width: 1400px;
  height: 310px;
  display: flex;
  margin: 100px 0 100px 0;
`

export const Illustration = styled.img`
  width: 525px;
  height: 310px;
  display: flex;
  align-items: flex-start;
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
  }

  h3 {
    font-size: ${theme.font.sizes.medium};
    font-weight: 300;
    text-align: left;
    margin-left: 50px;
  }
`
