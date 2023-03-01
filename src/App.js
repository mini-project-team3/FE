import { QueryClient, QueryClientProvider } from "react-query";
import { useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Router from "./shared/Router";
import Toggle from "./components/Toggle";

const queryClient = new QueryClient();

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: all 0.5s linear;
`;

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = useCallback(() => {
    setThemeMode((prevThemeMode) => (prevThemeMode === "light" ? "dark" : "light"));
  }, []);

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
          <Toggle onClick={toggleTheme}>{themeMode === "light" ? "Dark Mode" : "Light Mode"}</Toggle>
          <Header />
          <Router />
        </AppWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
