import { createStitches } from '@stitches/react'
import DesignToken from '@ubie/design-tokens'

type C = keyof typeof DesignToken['color']

const colors = Object.entries(DesignToken.color).reduce(
  (prev, [name, value]) => {
    return {
      ...prev,
      [name]: value.value,
    }
  },
  {}
) as {
  [K in C]: string
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
      black: DesignToken.color['ubie-black-900'].value,
      ...colors,
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
})
