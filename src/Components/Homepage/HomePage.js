import React, { useState } from "react";
import { useEffect } from "react";
import NFTNavbar from "./NFTNavbar";
import DiscoverSection from "./DiscoverSection";
import CardDisplay from "./CardDisplay";
import Banner from "./Banner";
import Categories from "./Categories";
import LastSection from "./LastSection";
import NFTCarousel from "./NFTCarousel";
import TopCollections from "./TopCollection";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";

const HomePage = () => {
  let loadingCount = 0;
  const [loadings, setloadings] = useState(0);

  const [nftData, setNftData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://shortgun-backend.herokuapp.com/nft/getNFTs")
      .then((response) => {
        console.log(response.data);
        // 'nftData' = response.data;
        // console.log('nftData'[0].nftName);
        setNftData(response.data);
        loadingCount = loadingCount + 1;
        setloadings(loadingCount);
        // return 'nftData';
        // console.log( nftData)
        // setNftData(response.data)
      })
      .catch((error) => {
        console.log(error);
        // window.alert("Registration Failed ");
        // console.log(error);
      });
    // flag = 1;
  }, []);

  return (
    <>
      {loadings !== 1 ? (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <Spinner
            animation="border"
            style={{
              fontSize: '50px',
              color: '#6739B7',
              width: '100px',
              height: '100px',
              margin: '50px auto 40px auto',
            }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        ''
      )}
      <div
        style={
          loadings !== 1
            ? {
              opacity: "0.25",
              position: "fixed",
              overflowY: "scroll",
              width: "100%",
            }
            : {}
        }
      >
        <NFTNavbar />
        <DiscoverSection />
        <CardDisplay
          setloadings={setloadings}
          loadingCount={loadingCount}
          nftData={nftData}
        />
        <Banner />
        <NFTCarousel nftData={nftData} />
        <TopCollections />
        <Categories nftData={nftData} />
        <LastSection />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
