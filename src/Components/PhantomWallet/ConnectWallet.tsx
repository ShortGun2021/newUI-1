import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
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

import TransferSol from "./TransferSol.tsx";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const ConnectWallet: FC = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const { connection } = useConnection();
  console.log(connection);
  const { publicKey } = useWallet();
  if (publicKey) console.log(publicKey.toBase58());
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
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          {/* Your app's components go here, nested within the context providers. */}
          <TransferSol />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default ConnectWallet;
