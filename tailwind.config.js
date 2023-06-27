module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./components/**/*.js', './lib/**/*.js', './pages/**/*.js'],
  safelist: [
    /flex/,
    /(max-w|w)-(prose|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/,
    /p(t|b|l|r)-(4|8|16|24|32|48|64|96|128)/,
    /(self|justify-self|items|justify)-(start|center|end)/,
    /(bg|text)-(black|white|blue|coral|lightBlue|red|green|yellow|pink|premiumBlue)/,
    /(col-span|grid-cols|order|col-start)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
    /m(l|x|r)-auto/,
  ].map((pattern) => ({
    pattern,
    variants: ['xs', 'sm', 'md', 'lg'],
  })),
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
    },
    colors: {
      // Preset
      black: 'var(--black)',
      current: 'currentColor',
      inherit: 'inherit',
      pageBG: 'var(--pageBG)',
      pageText: 'var(--pageText)',
      transparent: 'transparent',
      white: 'var(--white)',
      // Branding
      blue: {
        DEFAULT: 'var(--blue)',
      },
      coral: {
        DEFAULT: 'var(--coral)',
      },
      lightBlue: {
        DEFAULT: 'var(--lightBlue)',
      },
      red: {
        DEFAULT: 'var(--red)',
      },
      green: {
        DEFAULT: 'var(--green)',
      },
      yellow: {
        DEFAULT: 'var(--yellow)',
      },
      pink: {
        DEFAULT: 'var(--pink)',
      },
      premiumBlue: {
        DEFAULT: 'var(--premiumBlue)',
      },
    },
    fontSize: new Array(201)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = `${val / 10}rem`
        return acc
      }, {}),
    lineHeight: {
      ...new Array(161)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = val / 100
          return acc
        }, {}),
      wound: 1.1,
      gripped: 1.4,
      normal: 1.5,
    },
    spacing: new Array(351)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = `${val / 10}rem`
        return acc
      }, {}),
    opacity: new Array(21)
      .fill()
      .map((_, i) => i * 5)
      .reduce((acc, val) => {
        acc[val] = `${val / 100}`
        return acc
      }, {}),
    zIndex: new Array(11)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = val
        return acc
      }, {}),
    extend: {
      fontFamily: {
        inherit: 'inherit',
        barlow: 'Barlow',
        'basis-grotesque-pro': 'Basis Grotesque Pro',
      },
      maxWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        prose: '100ch',
      },
      width: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        prose: '100ch',
      },
      spacing: {
        'bp-xs': '576px',
        'bp-sm': '768px',
        'bp-md': '992px',
        'bp-lg': '1200px',
      },
    },
  },
  plugins: [],
}
