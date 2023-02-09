import "../i18n/i18n";
import "../../styles/globals.css";
import "@/extends/extendedPrototypes";
import "swiper/css";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createMyTheme } from "@/mui";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={createMyTheme()}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
