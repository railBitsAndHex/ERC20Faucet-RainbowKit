import { Navbar, Container, Nav } from "react-bootstrap";
import ConnectBtn from "./ConnectBtn";

function Nvbar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>ERC20 FAUCET</Navbar.Brand>
          <Nav>
            <ConnectBtn />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nvbar;
