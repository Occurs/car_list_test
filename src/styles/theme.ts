import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './variables';

export const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: colors.font,
    },
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});