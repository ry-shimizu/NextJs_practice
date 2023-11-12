/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from '../../../types/style'
import { toPropValue, Color, Space } from '../../../util/styles'
import { theme } from 'themes'

export type BoxProps = {
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

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 */
const Box = styled.div<BoxProps>`
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

export default Box