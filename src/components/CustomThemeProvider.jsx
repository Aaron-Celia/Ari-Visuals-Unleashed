'use client';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			light: "#D8D9DA",
			main: "#ffffff",
			dark: "#61677A"
		},
		secondary: {
            light: '#1D267D',
			main: "#000000",
			dark: "#434242"
		}
	}
});

export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
