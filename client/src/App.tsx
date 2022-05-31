import React from "react";
import "@rainbow-me/rainbowkit/styles.css";

import "./App.css";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "./configs/config";
import Intro from "./components/Intro";
import Nvbar from "./components/Nvbar";
import Centre from "./components/Centre";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} showRecentTransactions>
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
