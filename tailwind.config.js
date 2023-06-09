module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./components/**/*.js', './lib/**/*.js', './pages/**/*.js'],
  safelist: [
    {
      pattern: /grid-cols-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /col-span-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /col-start-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /justify-self-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /self-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /max-w-/,
    },
    {
      pattern: /bg-/,
    },
    {
      pattern: /text-/,
    },
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '940px',
      lg: '1200px',
      xl: '1600px',
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: 'var(--black)',
      white: 'var(--white)',
      pageBG: 'var(--pageBG)',
      pageText: 'var(--pageText)',
      neutral: {
        100: 'var(--neutral-100)',
        200: 'var(--neutral-200)',
        300: 'var(--neutral-300)',
        400: 'var(--neutral-400)',
        500: 'var(--neutral-500)',
        600: 'var(--neutral-600)',
        700: 'var(--neutral-600)',
        800: 'var(--neutral-600)',
        900: 'var(--neutral-600)',
      },
      blue: {
        DEFAULT: 'var(--blue-main)',
        light: 'var(--blue-light)',
        dark: 'var(--blue-dark)',
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
        600: 'var(--blue-600)',
      },
      coral: {
        DEFAULT: 'var(--coral-main)',
        light: 'var(--coral-light)',
        dark: 'var(--coral-dark)',
        100: 'var(--coral-100)',
        200: 'var(--coral-200)',
        300: 'var(--coral-300)',
        400: 'var(--coral-400)',
        500: 'var(--coral-500)',
        600: 'var(--coral-600)',
      },
      lightBlue: {
        DEFAULT: 'var(--lightBlue-main)',
        light: 'var(--lightBlue-light)',
        dark: 'var(--lightBlue-dark)',
        100: 'var(--lightBlue-100)',
        200: 'var(--lightBlue-200)',
        300: 'var(--lightBlue-300)',
        400: 'var(--lightBlue-400)',
        500: 'var(--lightBlue-500)',
        600: 'var(--lightBlue-600)',
      },
      red: {
        DEFAULT: 'var(--red-main)',
        light: 'var(--red-light)',
        dark: 'var(--red-dark)',
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
        600: 'var(--red-600)',
      },
      green: {
        DEFAULT: 'var(--green-main)',
        light: 'var(--green-light)',
        dark: 'var(--green-dark)',
        100: 'var(--green-100)',
        200: 'var(--green-200)',
        300: 'var(--green-300)',
        400: 'var(--green-400)',
        500: 'var(--green-500)',
        600: 'var(--green-600)',
      },
      yellow: {
        DEFAULT: 'var(--yellow-main)',
        light: 'var(--yellow-light)',
        dark: 'var(--yellow-dark)',
        100: 'var(--yellow-100)',
        200: 'var(--yellow-200)',
        300: 'var(--yellow-300)',
        400: 'var(--yellow-400)',
        500: 'var(--yellow-500)',
        600: 'var(--yellow-600)',
      },
      pink: {
        DEFAULT: 'var(--pink-main)',
        light: 'var(--pink-light)',
        dark: 'var(--pink-dark)',
        100: 'var(--pink-100)',
        200: 'var(--pink-200)',
        300: 'var(--pink-300)',
        400: 'var(--pink-400)',
        500: 'var(--pink-500)',
        600: 'var(--pink-600)',
      },
      premiumBlue: {
        DEFAULT: 'var(--premiumBlue-main)',
        light: 'var(--premiumBlue-light)',
        dark: 'var(--premiumBlue-dark)',
        100: 'var(--premiumBlue-100)',
        200: 'var(--premiumBlue-200)',
        300: 'var(--premiumBlue-300)',
        400: 'var(--premiumBlue-400)',
        500: 'var(--premiumBlue-500)',
        600: 'var(--premiumBlue-600)',
      },
      pearlescent: {
        blue: 'var(--pearlescent-blue)',
        pink: 'var(--pearlescent-pink)',
        green: 'var(--pearlescent-green)',
      },
    },
    fontSize: new Array(201)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = `${val / 10}rem`
        return acc
      }, {}),
    lineHeight: new Array(161)
      .fill()
      .map((_, i) => i)
      .reduce((acc, val) => {
        acc[val] = val / 100
        return acc
      }, {}),
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
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        '6xl': '115rem',
        '7xl': '130rem',
        prose: '100ch',
      },
    },
  },
  plugins: [],
}
