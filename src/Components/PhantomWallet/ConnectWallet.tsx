import React, { FC } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import TransferSol from "./TransferSol.tsx";
import WalletDetails from "./WalletDetails.tsx";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const ConnectWallet: FC = () => {
  return (
    <>
      <WalletDetails />
      <WalletMultiButton />
      {/* <WalletDisconnectButton /> */}
      {/* Your app's components go here, nested within the context providers. */}
      {/* <TransferSol /> */}
    </>
  );
};

export default ConnectWallet;
