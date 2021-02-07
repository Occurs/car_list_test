import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './variables';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.hover,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    allVariants: {
      color: colors.font,
    },
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});