import React, { FC, useMemo, useState } from "react";
import { Button, Card, Modal, ListGroup, Image } from "react-bootstrap";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import {
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from "@solana-mobile/wallet-adapter-mobile";
// import TransferSol from "./TransferSol.tsx";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");
let navigate;
const openWallet = () => {
  navigate("/wallet");
};

const ConnectWallet: FC = () => {
  navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const { publicKey } = useWallet();

  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        appIdentity: { name: "Solana Wallet Adapter App" },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Button className="navItems" variant="light" onClick={handleShow}>
              <MdOutlineAccountBalanceWallet style={{ fontSize: "25px" }} />
            </Button>
            <WalletMultiButton />
            {/* <WalletDisconnectButton /> */}
            {/* Your app's components go here, nested within the context providers. */}
            {/* <TransferSol /> */}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      <Modal
        style={{ height: "715px" }}
        className="modalBox"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="show-grid">
            <ListGroup horizontal>
              <ListGroup.Item>
                <Image
                  rounded
                  src="https://avatars.githubusercontent.com/u/55938092?v=4"
                  height="35"
                  width="35"
                ></Image>
              </ListGroup.Item>

              <ListGroup.Item>
                <p>
                  {publicKey
                    ? publicKey.toBase58()
                    : "Please Connect To Your Wallet"}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center" style={{ marginBottom: "300px" }}>
            <Card.Body>
              <Card.Title>Total Balance</Card.Title>
              <Card.Text>$0.00 USD</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="d-grid gap-2">
                <Button
                  style={{ backgroundColor: "#6739B7", fontWeight: "700" }}
                  onClick={openWallet}
                >
                  Add funds
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConnectWallet;
