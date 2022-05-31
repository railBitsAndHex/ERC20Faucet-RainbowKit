import { MouseEvent, useEffect, useState } from "react";
import { useContractWrite } from "wagmi";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import mockTokenJson from "../chains/MockToken.json";
import "../styles/mintButton.modules.css";

type mintProps = {
  address: string;
  tokenAddress: string;
};
interface IProps {
  mintProps: mintProps;
}

function MintTokens(props: IProps) {
  const [btnStyle, setBtnStyle] = useState({
    backgroundColor: "#005f73",
    fontWeight: "700",
    height: "3.5em",
    borderRadius: "10px",
    border: "0px",
  });
  const { address, tokenAddress }: mintProps = props.mintProps;
  const { abi } = mockTokenJson;
  const { isError, write, isSuccess, status } = useContractWrite(
    {
      addressOrName: tokenAddress,
      contractInterface: abi,
    },
    "mint"
  );
  useEffect(() => {
    if (isError && status === "error") {
      toast.error("Transaction Failed!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
        hideProgressBar: false,
      });
    } else if (isSuccess && status === "success") {
      toast.success("Successfully minted 10000 mockTokens", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: false,
      });
    }
  }, [write, isError, isSuccess, status]);
  return (
    <>
      <section className="mint-btn-sect">
        <Button
          onClick={() => write()}
          className="mint-btn"
          onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setBtnStyle({
              ...btnStyle,
              backgroundColor: "#0a9396",
            });
          }}
          onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setBtnStyle({ ...btnStyle, backgroundColor: "#005f73" });
          }}
          style={btnStyle}
        >
          Mint mockTokens
        </Button>
        <ToastContainer />
      </section>
    </>
  );
}

export default MintTokens;
