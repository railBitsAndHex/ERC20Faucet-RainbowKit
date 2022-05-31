import React from "react";
import "../styles/intro.modules.css";
import MintTokens from "./MintTokens";
function Intro() {
  return (
    <>
      <section className="intro-section">
        <h2>ERC20 FAUCET</h2>
        <p>
          <b>
            Simple. Easy. Start Minting mock tokens across 9 different testnet
            chains today.
          </b>
        </p>
      </section>
    </>
  );
}

export default Intro;
