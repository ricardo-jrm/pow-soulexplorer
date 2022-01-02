import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const soulDark: ThemeOptions = {
  typography,
  palette: {
    mode: 'dark',
    primary: {
      main: '#037abd',
    },
  },
  components: overrides,
};
