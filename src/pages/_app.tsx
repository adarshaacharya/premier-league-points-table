import { Inter } from "next/font/google";

import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      {globalStyles}
      <Component {...pageProps} />
    </main>
  );
}
