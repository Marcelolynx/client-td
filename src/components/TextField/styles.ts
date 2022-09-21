import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type TRemoveBackground = {
  removeInputBackground: boolean
}
type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>
type WrapperProps = Pick<TextFieldProps, 'disabled'> &
  TRemoveBackground & { error?: boolean }

export const InputWrapper = styled.div<TRemoveBackground>`
  ${({ theme, removeInputBackground }) => css`
    display: flex;
    background: ${removeInputBackground
      ? 'transparent'
      : theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: ${removeInputBackground ? 0 : `0 ${theme.spacings.xsmall}`};
    border: ${removeInputBackground ? 'none' : '0.2rem solid'};
    border-color: ${removeInputBackground ? 'none' : theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps & TRemoveBackground>`
  ${({ theme, iconPosition, removeInputBackground }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    padding-${iconPosition}: ${
    removeInputBackground ? 0 : theme.spacings.xsmall
  };
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${
    theme.colors.lightGray
  } inset
      filter: none
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? '1' : '0'};
    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
  disabled: (theme: DefaultTheme, removeInputBackground: boolean) => css`
    ${Label} {
      color: ${theme.colors.gray};
    }
    ${Input} {
      color: ${removeInputBackground
        ? theme.colors.primary
        : theme.colors.gray};
    }
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error, removeInputBackground }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme, removeInputBackground)}
  `}
`
