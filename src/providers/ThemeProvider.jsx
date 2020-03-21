import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import { childrenType } from '../types';
import { colors } from '../utils/views';

const theme = {
  colors: {
    primary: colors.ebb,
    secondary: colors.hintOfRed,
    info: colors.linkWater,
  },
};
const ThemeProvider = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

ThemeProvider.propTypes = {
  ...childrenType,
};

export default ThemeProvider;
