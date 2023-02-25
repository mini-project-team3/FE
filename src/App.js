import { QueryClient, QueryClientProvider } from "react-query";
import { useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { IoBulbOutline } from "react-icons/io5";

const queryClient = new QueryClient();

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: all 0.5s linear;
`;

const LargeIoBulbOutline = styled(IoBulbOutline)`
  font-size: 5em;
  justify-content: flex-end;
`;

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = useCallback(() => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }, [themeMode]);

  const theme = {
    light: {
      background: "#ffffff",
      color: "#000000",
    },
    dark: {
      background: "#333",
      color: "#ffffff",
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[themeMode]}>
        <AppWrapper>
          <LargeIoBulbOutline onClick={toggleTheme}>
            {themeMode === "light" ? "Dark Mode" : "Light Mode"}
          </LargeIoBulbOutline>
          <Header />
          <Main />
        </AppWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
