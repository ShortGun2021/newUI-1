import { FC, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Button, Card, Modal, ListGroup, Image } from "react-bootstrap";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import React from "react";

let navigate;
const openWallet = () => {
  navigate("/wallet");
};
const WalletDetails: FC = () => {
  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const fetchBalance = async () => {
    if (publicKey) {
      const walletBalance = await connection.getBalance(publicKey);
      setBalance(walletBalance);
    }
    console.log(balance);
  };
  navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  fetchBalance();
  console.log(balance);
  return (
    <>
      <Button className="navItems" variant="light" onClick={handleShow}>
        <MdOutlineAccountBalanceWallet style={{ fontSize: "25px" }} />
      </Button>
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
                <p style={{ fontSize: "0.9rem" }}>
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
              <Card.Text>
                {balance ? "$" + balance + "SOL" : "$0.00 SOL"}
              </Card.Text>
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
export default WalletDetails;
