import React, { ReactNode, useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import "../styles/mintButton.modules.css";
import { useContractWrite } from "wagmi";
import mockTokenJson from "../chains/MockToken.json";
import { GrStatusCritical, GrStatusGood } from "react-icons/gr";
type mintProps = {
  address: string;
  tokenAddress: string;
};
interface IProps {
  mintProps: mintProps;
}
function MintTokens(props: IProps) {
  const { address, tokenAddress }: mintProps = props.mintProps;
  const [modal, setModal] = useState<ReactNode>(null);
  const [show, setShow] = useState(false);
  const { abi } = mockTokenJson;
  const { data, isError, isLoading, write, isSuccess } = useContractWrite(
    {
      addressOrName: tokenAddress,
      contractInterface: abi,
    },
    "mint"
  );
  const handleClose = () => {
    console.log("clicked");
    setShow(false);
    setModal(null);
  };
  useEffect(() => {
    if (isLoading) {
      const modalLoading = (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            <section className="modal-body-sect">
              <Spinner
                className="modal-spinner"
                animation="border"
                variant="info"
              />
              <span className="modal-body-span">
                Transaction is processing... Please wait a moment
              </span>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
      setShow(true);
      setModal(modalLoading);
    } else if (isError) {
      const modalError = (
        <Modal
          show={show}
          onHide={() => handleClose()}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            <section className="modal-body-sect">
              <GrStatusCritical />
              <div>Transaction Failed</div>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
      setModal(modalError);
      setShow(true);
    } else if (isSuccess) {
      console.log(isSuccess);
      console.log(isLoading);
      const modalSuccess = (
        <Modal
          show={show}
          onHide={() => handleClose()}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            <section className="modal-body-sect">
              <GrStatusGood />
              <div>Transaction Success!</div>
              <p>Successfully minted 10000 mockTokens.</p>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
      setModal(modalSuccess);
      setShow(true);
    }
  }, [data, write, isError, isLoading, isSuccess]);
  return (
    <>
      <section className="mint-btn-sect">
        <Button onClick={() => write()} className="mint-btn">
          Mint mockTokens
        </Button>
        {modal}
      </section>
    </>
  );
}

export default MintTokens;
