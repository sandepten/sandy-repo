import type { AppProps } from "next/app";
import BottomNavbar from "../components/BottomNavbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNavbar />
    </>
  );
}
