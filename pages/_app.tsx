import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   * {
//     font-family: 'Poppins', sans-serif;
//   }
// `;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
