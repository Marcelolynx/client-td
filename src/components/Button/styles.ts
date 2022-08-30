import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      90deg,
      rgba(115, 65, 115, 1) 0%,
      rgba(139, 79, 139, 1) 36%,
      rgba(139, 79, 139, 1) 63%,
      rgba(115, 65, 115, 1) 96%
    );

    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: linear-gradient(
        180deg,
        rgba(139, 79, 139, 1) 0%,
        rgba(115, 65, 115, 1) 36%,
        rgba(115, 65, 115, 1) 63%,
        rgba(139, 79, 139, 1) 96%
      );
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
