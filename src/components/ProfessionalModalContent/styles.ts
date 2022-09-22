import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: left;
    position: relative;
  `}
`

export const ProfessionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 600px;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    height: 40rem;
    width: 50%;
    min-width: 275px;
    background-image: ${theme.colors.white};
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.xsmall};

    > div:not(:first-child) {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Description = styled.section`
  ${({ theme }) => css`
    display: inline-block;
    max-width: 600px;
    overflow-wrap: break-word;
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.primary};
  `}
`
