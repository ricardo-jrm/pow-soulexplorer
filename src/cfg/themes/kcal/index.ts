import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const kcal: ThemeOptions = {
  typography,
  palette: {
    primary: {
      light: '#d85050',
      main: '#d02525',
      dark: '#911818',
    },
    secondary: {
      main: '#d02525',
    },
  },
  components: overrides,
};
