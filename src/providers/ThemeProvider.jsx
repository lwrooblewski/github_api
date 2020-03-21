import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import { childrenType } from '../types';
import { colors } from '../utils/views';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = {
  colors: {
    primary: colors.ebb,
    secondary: colors.hintOfRed,
    info: colors.linkWater,
    background: colors.white,
  },
};
const ThemeProvider = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

ThemeProvider.propTypes = {
  ...childrenType,
};

export default ThemeProvider;
