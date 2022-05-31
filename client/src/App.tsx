import React from "react";
import "@rainbow-me/rainbowkit/styles.css";

import "./App.css";
import { WagmiConfig } from "wagmi";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "./configs/config";
import Intro from "./components/Intro";
import Nvbar from "./components/Nvbar";
import { useAccount } from "wagmi";
import Centre from "./components/Centre";
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        showRecentTransactions
        theme={lightTheme()}
      >
        <Nvbar />
        <section className="app-section">
          <Intro />
          <Centre />
        </section>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
