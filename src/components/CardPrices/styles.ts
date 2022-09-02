import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import theme from 'styles/theme'

const customMedia = generateMedia({
  mediumPlus: '860px'
})

type CardProps = {
  middleCard: boolean
}

export const BoxCard = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const SingleCard = styled.div<CardProps>`
  ${({ middleCard }) => css`
    display: flex;
    height: 550px;
    max-width: 370px;
    border-radius: 20px;
    margin-bottom: 20px;
    background: ${middleCard ? theme.colors.primary : theme.colors.white};
    padding: 0 20px 20px;
    color: ${middleCard ? theme.colors.white : theme.colors.primary};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: ${middleCard ? 'translateY(0px)' : 'translateY(25px)'};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    ${customMedia.lessThan('mediumPlus')`
      width: 100%;
      display: flex;
      transform: translateY(0px);
    `}

    .pricebox {
      display: flex;
      padding: 20px;
      border-bottom: 2px solid
        ${middleCard ? theme.colors.white : theme.colors.primary};
      margin-bottom: 20px;
      text-align: left;
    }

    .BoxIcon {
      height: 64px;
      width: 64px;
      background: ${theme.colors.secondary};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
    }

    .iconCard {
      height: 32px;
      margin: 10px;
      color: ${theme.colors.primary};
    }

    .icon {
      height: 26px;
      margin: 10px;
    }

    span {
      padding: 10px;
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.xbold};
    }
  `}
`
export const BoxList = styled.div<CardProps>`
  ${({ middleCard }) => css`
    font-size: ${theme.font.sizes.xsmall};
    justify-content: start;

    ul {
      list-style: none;
      text-align: left;
      align-items: flex-start;
      padding: 5px 0;
    }

    li {
      text-align: left;
      margin-left: 0;
    }

    svg {
      color: ${middleCard ? theme.colors.white : 'green'};
      height: 20px;
    }
  `}
`

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    text-align: left;
  }
`

export const Button = styled.button<CardProps>`
  ${({ middleCard }) => css`
    width: 200px;
    background: ${middleCard ? theme.colors.white : theme.colors.primary};
    color: ${middleCard ? theme.colors.primary : theme.colors.white};
    border-radius: 20px;
    height: 50px;
    border: none;
    font-weight: 600;
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    position: relative;
    align-self: center;
  `}
`
