import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const soul: ThemeOptions = {
  typography,
  palette: {
    primary: {
      light: 'rgb(53, 148, 202)',
      main: '#037abd',
      dark: 'rgb(2, 85, 132)',
    },
  },
  components: overrides,
};
