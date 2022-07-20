/* eslint-disable react/style-prop-object */
import { useEffect, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button, Card, Modal, ListGroup, Image } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

import React from "react";
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
let navigate;
const WalletDetails = () => {
  const openWallet = () => {
    handleClose();
    navigate("/wallet");
  };

  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  const { publicKey, disconnect } = useWallet();
  const fetchBalance = async () => {
    if (publicKey) {
      const walletBalance = await connection.getBalance(publicKey);
      setBalance(walletBalance / LAMPORTS_PER_SOL);
      localStorage.setItem("publicKey", publicKey.toBase58());
    } else {
      localStorage.setItem("publicKey", "");
    }
    // console.log(balance);
  };
  navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    disconnectWallet();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const disconnectWallet = async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    await disconnect();
    localStorage.setItem("jwt", "");
    localStorage.setItem("user", "");
    localStorage.setItem("walletAddress", "");
    navigate("/login");
  };

  fetchBalance();
  // console.log(balance);
  return (
    <>
      <Button className="navItems" variant="light" onClick={handleShow}>
        <MdOutlineAccountBalanceWallet style={{ fontSize: "25px" }} />
      </Button>

      <Modal className="modalBox" show={show} onHide={handleClose}>
        <Modal.Body>
          <Card>
            <Card.Body className=" row text-center">
              <div className="col-sm-3 mt-1 mb-2 pl-3">
                <Image
                  rounded
                  src="https://avatars.githubusercontent.com/u/55938092?v=4"
                  className="rounded-circle img-fluid"
                  style={{ width: "50px" }}
                  alt="ProfilePicture"
                />
              </div>
              <h4 className="col-sm-9 mt-3 mb-2">
                Wallet Address <MdOutlineAccountBalanceWallet />
              </h4>

              <p className="text-muted mb-2">
                {publicKey ? (
                  <Typography>{publicKey.toBase58().toString()}</Typography>
                ) : (
                  <Typography>Please Connect To Your Wallet</Typography>
                )}
              </p>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Balance</Card.Title>
              <Card.Text>
                <Typography variant="h2" component="overline">
                  {publicKey ? "$" + balance : "$0.00"}
                  <Typography variant="h3" component="overline">
                    &nbsp;SOL
                  </Typography>
                </Typography>
              </Card.Text>
              <div className="d-grid gap-2">
                {publicKey ? (
                  <Button
                    style={{ backgroundColor: "#6739B7", fontWeight: "700" }}
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                  >
                    {isLoading ? "Disconnecting..." : "Disconnect Wallet"}
                  </Button>
                ) : null}
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Modal.Footer>
                <Button
                  style={{ fontWeight: "700" }}
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Card.Footer>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default WalletDetails;
