import React, { useState } from "react";
import { Theme } from "../../utils/types";

export const ThemeContext = React.createContext({
  theme: Theme.DARK,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_theme: Theme) => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
