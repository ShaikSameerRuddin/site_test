import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, Themes } from '../../../style/theme';
import { RoutesComponents } from '../components/Routes/Routes';

export const App : React.FC<{}> = () => {
  const currentTheme = {
    ...getTheme(Themes.LIGHT),
    selected: Themes.LIGHT,
  };
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <RoutesComponents />
      </ThemeProvider>
    </>
  );
};
