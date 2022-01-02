import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const kcal: ThemeOptions = {
  typography,
  palette: {
    primary: {
      main: '#d02525',
    },
  },
  components: overrides,
};
