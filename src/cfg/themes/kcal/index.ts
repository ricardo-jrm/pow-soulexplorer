import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const kcal: ThemeOptions = {
  typography,
  palette: {
    primary: {
      light: 'rgb(217, 80, 80)',
      main: '#d02525',
      dark: 'rgb(145, 25, 25)',
    },
    secondary: {
      main: '#d02525',
    },
  },
  components: overrides,
};
