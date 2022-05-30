import React from "react";
import "./App.css";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "./configs/config";
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <section>
          <h1>Hello world!</h1>
        </section>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
