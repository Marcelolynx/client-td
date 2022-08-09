import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 1400px;
  display: flex;
  margin: 150px 0 150px 0;
  background: #f7f7f7;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  ${media.lessThan('medium')`
      flex-direction: column;
      max-width: 540px;
      height: 1960px;
    `}
`

export const BoxList = styled.div`
  padding: 10px;
  list-style: none;
  display: flex;
  font-size: ${theme.font.sizes.xsmall};
  justify-content: start;
  margin-bottom: 20px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
  li {
    text-align: left;
    margin-left: 0;
  }

  svg {
    color: green;
    padding: 2px;
    height: 20px;
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  ${media.lessThan('medium')`
      flex-direction: column;
  `}
`

export const Illustration = styled.img`
  width: 525px;
  height: 310px;
  display: flex;
  align-items: flex-start;
`
export const TextCta = styled.strong`
  align-self: center;
  align-items: center;
  margin-top: 20px;
  font-size: ${theme.font.sizes.xxlarge};
  color: ${theme.colors.primary};
  font-weight: ${theme.font.bold};
  ${media.lessThan('medium')`
    text-align: center;
  `}
`

export const TextVantagens = styled.span`
  align-self: center;
  font-size: ${theme.font.sizes.large};
  color: ${theme.colors.primary};
  font-weight: ${theme.font.normal};
`

export const Textterapeutas = styled.h4`
  align-self: center;
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.primary};
  font-weight: ${theme.font.light};
  margin-top: 10px;
  margin-bottom: 20px;
`

export const InfoPrice = styled.h4`
  width: 500px;
  height: 65px;
  margin: 0 auto;
  border-radius: 40px;
  font-size: ${theme.font.sizes.medium};
  background: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  font-weight: ${theme.font.bold};
  display: flex;
  align-items: center;
`
export const ValorMensal = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
  border: 2px solid ${theme.colors.secondary};
  width: 175px;
  height: 100%;
  margin-right: 25px;
  font-size: ${theme.font.sizes.medium};
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  font-weight: ${theme.font.bold};
`
export const BoxCard = styled.div`
  height: 550px;
  width: 100%;
  padding: 50px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  ${media.lessThan('medium')`
      flex-direction: column;
      height: 750px;
      margin-top: 400px;
  `}
`

export const SingleCard = styled.div`
  height: 550px;
  width: 370px;
  border-radius: 20px;
  margin: 20px;
  background: white;
  padding: 20px;
  color: ${theme.colors.primary};
  box-shadow: 0 2.8px 2.2px rgba(115, 65, 115, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('medium')`
      flex-direction: column;
      height: 450px;
      width: 300px;
  `}

  .pricebox {
    display: flex;
    padding: 20px;
    border-bottom: 2px solid ${theme.colors.primary};
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
`
export const FamilyCard = styled.div`
  height: 550px;
  width: 390px;
  border-radius: 20px;
  margin: 20px;
  background: ${theme.colors.primary};
  padding: 20px;
  color: ${theme.colors.white};
  transform: translateY(-25px);
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('medium')`
      flex-direction: column;
      height: 550px;
      width: 300px;
  `}

  .pricebox {
    display: flex;
    padding: 20px;
    border-bottom: 2px solid white;
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
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
  `}
  }
`
export const SuperFamilyCard = styled.div`
  height: 550px;
  width: 390px;
  border-radius: 20px;
  margin: 20px;
  background: white;
  padding: 20px;
  color: ${theme.colors.primary};
  transform: translateY(-25px);
  display: flex;
  flex-direction: column;

  .iconCard {
    height: 64px;
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
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
    `}
  }
`

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: normal;

  p {
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    text-align: left;
  }
`

export const Button = styled.button`
  width: 200px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 20px;
  height: 50px;
  border: none;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: ${theme.font.sizes.medium};
  cursor: pointer;
  position: relative;
  align-self: center;
`

export const ButtonWhite = styled.button`
  width: 200px;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border-radius: 20px;
  height: 50px;
  border: none;
  font-weight: 600;
  font-size: ${theme.font.sizes.medium};
  cursor: pointer;
  position: relative;
`
