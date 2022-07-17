import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
// import NFTNavbar from "./Components/Homepage/NFTNavbar";
import SearchPage from "./Components/Search/SearchPage";
import CollectionsPage from "./Components/Collections/Collections";
import ExplorePage from "./Components/Explore/Explore";
import ProfilePage from "./Components/Profile/Profile";
import CardIndex from "./Components/NFTCard/CardIndex";
import NFTUpload from "./Components/Upload/Upload.tsx";
import ConnectWallet from "./Components/PhantomWallet/ConnectWallet.tsx";
import WalletDetails from "./Components/PhantomWallet/WalletDetails.tsx";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PrivateRoute from "./Controller/PrivateRoute";

import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
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
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from "@solana-mobile/wallet-adapter-mobile";
// import TransferSol from "./TransferSol.tsx";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const App = () => {
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
      {/* <HomePage/> */}
      {/* <SearchPage/> */}
      {/* <CardIndex/> */}
      {/* <ProfilePage/> */}
      {/* <ExplorePage/> */}
      {/* <CollectionsPage/> */}

      <Router>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              {/* <NFTNavbar /> */}
              <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route
                  exact
                  path="/search"
                  element={
                    <PrivateRoute>
                      <SearchPage />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path="/explore"
                  element={
                    <PrivateRoute>
                      <ExplorePage />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path="/collections"
                  element={
                    <PrivateRoute>
                      <CollectionsPage />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path="/nft-card"
                  element={
                    <PrivateRoute>
                      <CardIndex />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path="/admin"
                  element={
                    <PrivateRoute>
                      <NFTUpload />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path="/wallet"
                  element={
                    <PrivateRoute>
                      <WalletDetails />
                      <ConnectWallet />
                    </PrivateRoute>
                  }
                ></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
              </Routes>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </Router>
    </>
  );
};

export default App;
