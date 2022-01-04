import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const soulDark: ThemeOptions = {
  typography,
  palette: {
    mode: 'dark',
    primary: {
      light: '#037abd',
      main: 'rgb(2, 85, 132)',
      dark: 'rgb(1, 59, 92)',
    },
    secondary: {
      main: '#037abd',
    },
  },
  components: overrides,
};
