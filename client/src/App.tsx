import React from "react";
import "@rainbow-me/rainbowkit/styles.css";

import "./App.css";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "./configs/config";
import ConnectBtn from "./components/ConnectBtn";
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode>
        <section>
          <h1>ERC20 MockToken Faucet</h1>
          <ConnectBtn />
        </section>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
