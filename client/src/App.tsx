import React from "react";
import "@rainbow-me/rainbowkit/styles.css";

import "./App.css";
import { WagmiConfig } from "wagmi";
import {
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "./configs/config";
import Intro from "./components/Intro";
import Nvbar from "./components/Nvbar";

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} showRecentTransactions>
        <Nvbar />
        <section className="app-section">
          <Intro />
        </section>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
