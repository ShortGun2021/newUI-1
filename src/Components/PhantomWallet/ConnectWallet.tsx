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
import WalletDetails from "./WalletDetails.tsx";
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

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.

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
            <WalletDetails />
            <WalletMultiButton />
            {/* <WalletDisconnectButton /> */}
            {/* Your app's components go here, nested within the context providers. */}
            {/* <TransferSol /> */}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default ConnectWallet;
