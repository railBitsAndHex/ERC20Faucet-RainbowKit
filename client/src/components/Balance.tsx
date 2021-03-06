import { useBalance } from "wagmi";
import MintTokens from "./MintTokens";
import "../styles/balance.modules.css";

type balanceProps = {
  address: string;
  tokenAddress: string;
};
interface IProps {
  balanceProps: balanceProps;
}

function Balance(props: IProps) {
  const { address, tokenAddress } = props.balanceProps;
  const balance = useBalance({
    addressOrName: address,
    token: tokenAddress,
    watch: true,
  });
  if (balance.isError) {
    return (
      <>
        <section>
          <div>
            An error occurred. Could not fetch balance. Looks like something
            went wrong
          </div>
        </section>
      </>
    );
  } else {
    const mintProps = {
      address: address,
      tokenAddress: tokenAddress,
    };
    return (
      <>
        <section className="balance-sect-1">
          <div>
            Wallet Balance: {balance.data?.formatted} {balance.data?.symbol}
          </div>
          <div>
            <MintTokens mintProps={mintProps} />
          </div>
        </section>
      </>
    );
  }
}

export default Balance;
