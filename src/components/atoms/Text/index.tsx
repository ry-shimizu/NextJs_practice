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

export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = {
  variant?: TextVariant
  fontsize?: Responsive<FontSize>
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
}

const variants = {
  extraSmall: {
    fontsize: 'extraSmall',
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontsize: 'small',
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontsize: 'medium',
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontsize: 'mediumLarge',
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontsize: 'large',
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontsize: 'extraLarge',
    letterSpacing: 5,
    lineHeight: 5,
  },
}

const Text = styled.span<TextProps>`
  ${({ variant, fontsize, letterSpacing, lineHeight }) => {
    if (variant && variants[variant]) {
      const styles = []

      !fontsize &&
        styles.push(toPropValue('font-size', variants[variant].fontsize, theme))
      !letterSpacing &&
        styles.push(
          toPropValue('letter-spacing', variants[variant].letterSpacing, theme),
        )
      !lineHeight &&
        styles.push(
          toPropValue('line-height', variants[variant].lineHeight, theme),
        )
      return styles.join('\n')
    }
  }}

  ${(props) => toPropValue('font-size', props.fontsize, theme)}
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
`
Text.defaultProps = {
  variant: 'medium',
  color: 'text',
}

export default Text
