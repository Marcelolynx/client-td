import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import theme from 'styles/theme'

const customMedia = generateMedia({
  mediumPlus: '860px'
})

export const Wrapper = styled.div`
  display: flex;
  max-width: ${theme.grid.container};
  margin: 0 auto;
  margin-top: 50px;
  background: ${theme.colors.bgCard};
  padding: 20px;
  border-radius: 40px;
  flex-direction: column;
`

export const Title = styled.strong`
  align-self: center;
  margin-top: 20px;
  font-size: ${theme.font.sizes.xxlarge};
  color: ${theme.colors.primary};
  font-weight: ${theme.font.bold};
`

export const Subtitle = styled.span`
  align-self: center;
  font-size: ${theme.font.sizes.large};
  color: ${theme.colors.primary};
  font-weight: ${theme.font.normal};
`

export const Description = styled.h4`
  align-self: center;
  font-size: ${theme.font.sizes.medium};
  color: rgba(139, 79, 139, 0.9);
  font-weight: ${theme.font.light};
  margin-top: 10px;
  margin-bottom: 20px;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;

  .boxContainer:not(:last-child) {
    padding-right: 15px;
  }

  ${customMedia.lessThan('mediumPlus')`
    display: flex;
    flex-direction: column;

    .boxContainer:not(:last-child) {
      padding-right: 0px;
    }
  `}
`
