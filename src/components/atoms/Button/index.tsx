import styled from 'styled-components'
import { Responsive } from '@/types/style'
import { theme } from 'themes'
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'util/styles'

// ボタンのバリエーション
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  fontSize?: Responsive<FontSize>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>
    }
    disabled?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const variants = {
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'primaryDark',
      },
      disabled: {
        backgroundColor: 'primary',
      },
    },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'secondaryDark',
      },
      disabled: {
        backgroundColor: 'secondary',
      },
    },
  },
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'dangerDark',
      },
      disabled: {
        backgroundColor: 'danger',
      },
    },
  },
}

const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass }) => {
    if (variant && variants[variant]) {
      const styles = []
      !color &&
        styles.push(toPropValue('color', variants[variant].color, theme))

      !backgroundColor &&
        styles.push(
          toPropValue(
            'background-color',
            variants[variant].backgroundColor,
            theme,
          ),
        )

      !pseudoClass &&
        styles.push(
          `&:hover {
                ${toPropValue(
                  'background-color',
                  variants[variant].pseudoClass.hover,
                  theme,
                )}
            }`.replaceAll('\n', ''),
        )

      !pseudoClass &&
        styles.push(
          `&:disabled {
                ${toPropValue(
                  'background-color',
                  variants[variant].pseudoClass.disabled,
                  theme,
                )}
            }`.replaceAll('\n', ''),
        )
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('font-size', props.fontSize, theme)}
    ${(props) => toPropValue('letter-spacing', props.letterSpacing, theme)}
    ${(props) => toPropValue('line-height', props.lineHeight, theme)}
    ${(props) => toPropValue('color', props.color, theme)}
    ${(props) => toPropValue('background-color', props.backgroundColor, theme)}
    ${(props) => toPropValue('width', props.width, theme)}
    ${(props) => toPropValue('height', props.height, theme)}
    ${(props) => toPropValue('min-width', props.minWidth, theme)}
    ${(props) => toPropValue('min-height', props.minHeight, theme)}
    ${(props) => toPropValue('display', props.display, theme)}
    ${(props) => toPropValue('border', props.border, theme)}
    ${(props) => toPropValue('overflow', props.overflow, theme)}
    ${(props) => toPropValue('margin', props.margin, theme)}
    ${(props) => toPropValue('margin-top', props.marginTop, theme)}
    ${(props) => toPropValue('margin-left', props.marginLeft, theme)}
    ${(props) => toPropValue('margin-bottom', props.marginBottom, theme)}
    ${(props) => toPropValue('margin-right', props.marginRight, theme)}
    ${(props) => toPropValue('padding', props.padding, theme)}
    ${(props) => toPropValue('padding-top', props.paddingTop, theme)}
    ${(props) => toPropValue('padding-left', props.paddingLeft, theme)}
    ${(props) => toPropValue('padding-bottom', props.paddingBottom, theme)}
    ${(props) => toPropValue('padding-right', props.paddingRight, theme)}
    &:hover {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
      )}
  }
  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
      )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`
Button.defaultProps = {
  variant: 'primary',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 1,
  paddingBottom: 1,
  color: 'white',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default Button
