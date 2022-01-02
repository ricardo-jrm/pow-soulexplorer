import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const kcalDark: ThemeOptions = {
  typography,
  palette: {
    mode: 'dark',
    primary: {
      light: '#d02525',
      main: 'rgb(145, 25, 25)',
      dark: 'rgb(101, 17, 17)',
    },
  },
  components: overrides,
};
