import { ThemeOptions, createTheme } from '@ricardo-jrm/fury/dist/mui';

const { breakpoints } = createTheme();

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    '"Open Sans"',
    '"PT Sans"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Radiance',
    'Radiance-Black',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Radiance-Distressed"',
  ].join(','),
  h1: {
    fontFamily: '"Open Sans"',
    fontSize: '60px',
    lineHeight: '60px',
    fontWeight: 600,
    [breakpoints.down('sm')]: {
      fontSize: '30px',
      lineHeight: '30px',
    },
  },
  h2: {
    fontFamily: '"Open Sans"',
    fontWeight: 600,
  },
  h3: {
    fontFamily: '"Open Sans"',
    fontWeight: 600,
  },
  h4: {
    fontFamily: '"Open Sans"',
    fontWeight: 600,
  },
  h5: {
    fontFamily: '"Open Sans"',
    fontWeight: 600,
  },
  h6: {
    fontFamily: '"Open Sans"',
    fontWeight: 600,
  },
  subtitle1: {
    fontFamily: '"PT Sans"',
  },
  subtitle2: {
    fontFamily: '"PT Sans"',
  },
  body1: {
    fontFamily: '"PT Sans"',
  },
  body2: {
    fontFamily: '"PT Sans"',
  },
  button: {
    fontFamily: '"Open Sans"',
    textTransform: 'none',
    fontWeight: 600,
  },
  caption: {
    fontFamily: '"PT Sans"',
  },
  overline: {
    fontFamily: '"PT Sans"',
  },
};
