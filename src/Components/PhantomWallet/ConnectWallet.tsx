import React, { FC } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");

const ConnectWallet: FC = () => {
  return <WalletMultiButton />;
};

export default ConnectWallet;
