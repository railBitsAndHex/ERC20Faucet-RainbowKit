import React from "react";
import { useConnect, useAccount } from "wagmi";
import chainMappings from "../chains/mappings.json";
import Balance from "./Balance";
import { Spinner } from "react-bootstrap";
import "../styles/centre.modules.css";
function Centre() {
  const { activeConnector, isConnecting } = useConnect();
  const account = useAccount();

  if (activeConnector && !account.isError) {
    const accData = account.data;
    if (accData !== undefined) {
      const address = accData.address;
      const mockTokenAddr: string =
        chainMappings["5"]["MockTokenContract"].address;
      const balanceProps = {
        address: address !== undefined ? address : "",
        tokenAddress: mockTokenAddr,
      };
      return <Balance balanceProps={balanceProps} />;
    }
    return (
      <>
        <section className="centre-sect-1">
          <div>Cannot fetch account data!</div>
        </section>
      </>
    );
  }
  if (isConnecting)
    return (
      <>
        <section className="centre-sect-1">
          <div>Connecting wallet...</div>
          <Spinner animation="border" variant="secondary" />
        </section>
      </>
    );
  return (
    <>
      <section className="centre-sect-1">
        Connect wallet and get started!
      </section>
    </>
  );
}

export default Centre;
