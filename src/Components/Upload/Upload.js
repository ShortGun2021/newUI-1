import React, { useEffect } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Arweave from "arweave";
import { Buffer } from "buffer";
import NFTNavbar from "../Homepage/NFTNavbar";
import "../Styles/UploadPageStyles/Upload.css";
import {
  TextField,
  Box,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

const Upload = () => {
  const { publicKey } = useWallet();
  let temp = true;
  // --------------Images ----------------------
  const [images, setImages] = React.useState([]);
  const [data, setData] = React.useState("");
  const maxNumber = 1;

  // ----------------------------Metadata-----------
  const [meta, setmeta] = React.useState({
    name: "",
    symbol: "",
    description: "",
    seller_fee_basis_points: "",
    trait_type: "",
    value: "",

    walletAddress: publicKey?.toBase58(),
    category: "",
    files: [
      {
        uri: "",
        type: "", //check it for different types such as video, gif, also list form
      },
    ],
  });
  useEffect(() => {
    setmeta({
      ...meta,
      walletAddress: publicKey?.toBase58(),
    });
  }, [publicKey]);

  // ---------------------metadata ---------------

  const onChangeData = (e) => {
    setmeta({
      ...meta,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePropType = (e) => {
    setmeta({
      ...meta,
      files: [
        {
          ...meta.files[0],
          [e.target.name]: e.target.value,
        },
      ],
    });
  };

  const onclick = () => {
    setmeta({
      ...meta,
    });
  };

  // ----------------------------Images variables - -----
  const onChange = (imageList) => {
    // data for submit

    // console.log(imageList);
    // console.log(addUpdateIndex);
    setImages(imageList);

    const im = imageList[0];
    let d = im[Object.keys(im)[0]];
    // console.log(d);
    setData(d);
  };
  // ----------------------------------------------------------------------------------
  // rwearve
  const Ar = async () => {
    //optionally check if fields are empty
    console.log(meta);
    // console.log(meta.symbol);
    // console.log(meta.description);
    // console.log(meta.seller_fee_basis_points);
    // console.log(meta.image);
    // console.log(meta.attributes[0].trait_type);

    if (
      !meta.trait_type ||
      !meta.value ||
      !meta.files[0] ||
      !meta.category ||
      !meta.walletAddress
    ) {
      temp = false;
    }

    if (
      !publicKey ||
      !meta.name ||
      !meta.symbol ||
      !meta.description ||
      !meta.seller_fee_basis_points ||
      temp === false
    ) {
      alert("Please fillup the required fields");
    } else {
      const arweave = Arweave.init({
        host: "arweave.net",
        port: 443,
        protocol: "https",
        timeout: 20000,
        logging: false,
      });
      const image1 = Buffer.from(data.split(",")[1], "base64");
      // console.log("done");
      console.log("connected");
      const transaction = await arweave.createTransaction({
        data: image1,
      });
      // console.log(transaction);
      transaction.addTag("Content-Type", "image/png");

      console.log("wallet done");

      await arweave.transactions.sign(transaction, {
        kty: "RSA",
        n: "3LoeAKTIJpq2hnpQ8wIK-TUcRwBElkt8TCztASJq7_I9ZMdVXHpD5-RQqY1kVZiSimEb2zulTNLuKMGb530zJ1JsMu57aJBEW0T8pjzpcEcWAJ_s7J9hWKNB-Bow9GblFVu19CUZFOkqyEgFWtoqQd2q6jS-nVkZhzr_rT8vwQs4eluTS3gUcch97ZDY7Y03AlvJ2FnaQrrkEI1bCKmqpbe0ghT3gyn5A3CeoyvV8X4EzU2JRTlnrVHipPt1F1KsUasqQfg_6HKSBu4ygTn9s5Fk1QGnweIF0RH9wBehrVw3ZAjJWugvl8DJaebOPYnd5d4Pe8ajCtuv3SvuyOmPhLWGl7aNFVWvXoYXrmuvbkmTQoebnLPvkHMtswZCZAfUrCmQQS2wBZ0027BFeA3Isbyf1yBF7Pldi1tp_fVc_-qtSaAYZm0hc7SYyu9wYwBwj7b5dlucrUDiAvSgM-rYF-1aEPpMSjIF6MRMU4YdQkyZj40594V7v7I8HVLmZc-r6XM1KT7mYdQJUAzjbg_mG6xhlyuMQ2Zx-b7kvy9JLvRp6cjBZ1tXgyNWd5rXy1aXssnyF8aGQ4GRaOk0wtcSRqN98vrzE9xqLS3OHLZdEYVKW7ign_7S7j1kC8C4xPR0B2Dz-hdAD-RmnBOf_mMeOjZr0teU_AGMAMUW37ArPT0",
        e: "AQAB",
        d: "McrKedqyTAMaqbtuB2OulgklF983ma_tmkGINXlOJlK_BrzwxKvQJb-bcqQyvhxs8kp1vj72Sx5KG2eRg-b6YyR0xAiITk49HVmypM2Y23stu3ZYPAi4LQanGxDNelS72NWXdjvoLI9s10Fn89bDMZiPtcWwOk6fM6Jbivl2DFY7p16BG8U613Ai-DR0uyHgBugt4GBknCkMya8ZmhqsJDYMwkt4il4tjlkZcDWzTYbgDnAvRy5r9O1D83PGNjywIrw6DCe0QvuVdXrGaeBrGtbxqBt3fIVASqmEVJEAJ9tlo2tYAOnf0pvq07j9TWSMag5t774fiZOFWJ9QfoIxnZMDcNdXtjWtMdDmuDOHX0R2Vz1eqa9blCjeRTHaRJVSwsUoyAbR-PwobTTsYJG6sLSz4Sd8Gyn2UuoX1SnNv4Y6-mGpM8oIfkZmngVWq0kPspRGFjpu_iR4WxcYxW4AHGItiz7YynUoZ8AIeIILPf4HzCceAnVhADdLdsCvTHW0w6GnKDLEUFeqZtvMYtNH5Wr5ggLUHpLxg1WjTWtGK2FqpxAU3jq08ABZZCRxLLPSy5AA1qUFkCHYV4mI61uRMPpd7nd1w6hy-J_EW3W-1S27HraXacV2SGEzav9osqm9L-0Rl68_TFWkQGy6JOdcpadmBnDPL37-Bd_5fsLgYAE",
        p: "9p3JCa964jJ7XiiAWkYuCF1E1AjAvUUwOAEymGMeohAJvD_Q-pgIL1urilvdeOwyZDgUQ-dXnkXJev09H-CDGQeonTWyLl6qT36aB7Kuk9qzkpW9Niz018K_UNx5abX4sQrs_H5M_PC4uxt-8vZLJCOMp2WCclWqKVLGeqmJCCSwQaI9swJRd5Bxq3XYqt00AcNTosQPFPwpwj32eZGbOTgFpZq1NPwIf5iASumiZSMotQVdREjLdeOGw2R6OveJUpedyxrIBTKOlhcduYreNz8VKPEKQELLOHVK7oTyjOGJ5peWdmhO0XzGvlSZFzuiJARDTchMgWrfCCN17v4RYQ",
        q: "5SAm3pZxNwfW_50DgD20addP7ESbcZZd8AyseqBEks0VRKn550jBVxr3HtH1fR3XLsR5Pn6tE90TUvClGZd6QaxEiF1Ye8cTY1ryFV_Fmze8fSyvKcdmEKDvJaMYlhf32p0Ju8ucjNwq5xvnO4mYzGDHWXalgD_A45VszH8g2T0Wc1OUp-8XomGfGrj3enWjLxHZNUguGcU4CUf6U9ql4rWfhL7UPDCggTl0lEVpsBQiagsW8a6yGWKjgCBEpz8X_YZRfebJp7nRPxvtW6xU419JBm_bEARCwEuiBNb434pJxJXvQAd8AFcqX1zSbjaYAHh_oLKjEITJqzrqXx0NXQ",
        dp: "lo_QK_yZTj25ucuKSRLtiae_nJ_XY_Y4sQhyJjzld9XIy8g-Qq_M13Tk7qyVMv0o6qyeGrLDeFps3ox649pCz2YwmAIvTUX4Pl4xlZ-OG7B6z3RhtxCNTqiT-r8P1O0G7reX5bMKN6aTcZAg2h5p059sgMplcH5CS8ZAbKTSh0k23ms5te8lY5SpASAKbo5r8OOaTRXbi1lD-VWxA5lUpgNA11Dzbmysl5G4SYQH5C0p7hJfVZAHv2pwXRwbz6JOkUEFUfmAwkOSb6mfOSbB8gKuXXeDZaYhwc9CNwqttjr_4OsNLi8SZ60A_TRS3q9GlyyPFo7BvoVLswFLP-SXIQ",
        dq: "BYNtjAOgu8tDgCkeEXLqqXVV5gCMoQIWRpV3fQfoPoQS0_EnI0qb5GWwtpwkxRr3t5dgt4FC1uyF74P85Q3BEl171LAyVeAndkeU9bC1R5PixDxUBrRWn2XP-17eU5ZGD4uh1VQD81vE6ITCXqtj8t8NTPjO6LQgBxnsYUtZ1gBjTuke9Z-KOQ0SUAlNYzP7dkF-sYqIGXSmcYq62lOzlC38pawV3VDqO9HPHVZCQctqPJUBu1UR0gyOlKGyJTgecqpNwbLQ_Wk6QMOCRady73m2fyIn6k2_8XKgdm9Z0783ITTeafMEJ9nxGhRYt_A2XiSIJazGwboARE-JnjpLvQ",
        qi: "y30NbB_LGbTwPKZ0qVZbazZh_SnnBMagTSfmssqelrUsiEstSKGsZVk1GyhAHzpoXasDGue81xlsHYp0qGzdSwsJOSFG6Qidi4MeDsTRWU62Bp8KOhah1nqvwVj9VwJwrtkf8N-crjbyzTgnJ5B2gX_NAZg0NFvoZ4lsPh7fDEQcB2P2Zu01Vwt-Zs_1qlMc4aDqVyN-TShgkSoNaH6PLwysI51BPh0Uc0XerjNwRZYPP2FdtSEVJO80apHwuOP0og6z8dBC2hTzKl6NOvbQ0Ft1cFA7-giYtFJ1aDc5oO4wpA2eTpo62Mvm6KPMWNmKdDJw8t9e3Bb0Md8fR5titQ",
      });

      // console.log('succesfull')

      const response = await arweave.transactions.post(transaction);
      // console.log(response);

      const id = transaction.id;
      const imageUrl = id ? `https://arweave.net/${id}` : undefined;
      console.log("imageUrl", imageUrl);
      // console.log("Image Sucessfully Uploaded");

      // ------------------ metadata function------
      // console.log("Uploading metadata");

      // console.log("fetching image urls");
      const newmeta = meta;

      // making changes in the types and embedding image urls in the metadata.
      const metadata1 = {
        ...newmeta,
        image: imageUrl,
        seller_fee_basis_points: parseInt(newmeta.seller_fee_basis_points),

        files: {
          ...newmeta.files[0],
          uri: imageUrl,
        },
      };

      // console.log("successfully fetched image urls");
      console.log("meta is ready");
      const metadata = JSON.stringify(metadata1); //converting into string

      const metarequest = JSON.parse(JSON.stringify(metadata));

      const metaTransaction = await arweave.createTransaction({
        data: metarequest,
      });

      metaTransaction.addTag("Content-Type", "application/json");

      await arweave.transactions.sign(metaTransaction, {
        kty: "RSA",
        n: "3LoeAKTIJpq2hnpQ8wIK-TUcRwBElkt8TCztASJq7_I9ZMdVXHpD5-RQqY1kVZiSimEb2zulTNLuKMGb530zJ1JsMu57aJBEW0T8pjzpcEcWAJ_s7J9hWKNB-Bow9GblFVu19CUZFOkqyEgFWtoqQd2q6jS-nVkZhzr_rT8vwQs4eluTS3gUcch97ZDY7Y03AlvJ2FnaQrrkEI1bCKmqpbe0ghT3gyn5A3CeoyvV8X4EzU2JRTlnrVHipPt1F1KsUasqQfg_6HKSBu4ygTn9s5Fk1QGnweIF0RH9wBehrVw3ZAjJWugvl8DJaebOPYnd5d4Pe8ajCtuv3SvuyOmPhLWGl7aNFVWvXoYXrmuvbkmTQoebnLPvkHMtswZCZAfUrCmQQS2wBZ0027BFeA3Isbyf1yBF7Pldi1tp_fVc_-qtSaAYZm0hc7SYyu9wYwBwj7b5dlucrUDiAvSgM-rYF-1aEPpMSjIF6MRMU4YdQkyZj40594V7v7I8HVLmZc-r6XM1KT7mYdQJUAzjbg_mG6xhlyuMQ2Zx-b7kvy9JLvRp6cjBZ1tXgyNWd5rXy1aXssnyF8aGQ4GRaOk0wtcSRqN98vrzE9xqLS3OHLZdEYVKW7ign_7S7j1kC8C4xPR0B2Dz-hdAD-RmnBOf_mMeOjZr0teU_AGMAMUW37ArPT0",
        e: "AQAB",
        d: "McrKedqyTAMaqbtuB2OulgklF983ma_tmkGINXlOJlK_BrzwxKvQJb-bcqQyvhxs8kp1vj72Sx5KG2eRg-b6YyR0xAiITk49HVmypM2Y23stu3ZYPAi4LQanGxDNelS72NWXdjvoLI9s10Fn89bDMZiPtcWwOk6fM6Jbivl2DFY7p16BG8U613Ai-DR0uyHgBugt4GBknCkMya8ZmhqsJDYMwkt4il4tjlkZcDWzTYbgDnAvRy5r9O1D83PGNjywIrw6DCe0QvuVdXrGaeBrGtbxqBt3fIVASqmEVJEAJ9tlo2tYAOnf0pvq07j9TWSMag5t774fiZOFWJ9QfoIxnZMDcNdXtjWtMdDmuDOHX0R2Vz1eqa9blCjeRTHaRJVSwsUoyAbR-PwobTTsYJG6sLSz4Sd8Gyn2UuoX1SnNv4Y6-mGpM8oIfkZmngVWq0kPspRGFjpu_iR4WxcYxW4AHGItiz7YynUoZ8AIeIILPf4HzCceAnVhADdLdsCvTHW0w6GnKDLEUFeqZtvMYtNH5Wr5ggLUHpLxg1WjTWtGK2FqpxAU3jq08ABZZCRxLLPSy5AA1qUFkCHYV4mI61uRMPpd7nd1w6hy-J_EW3W-1S27HraXacV2SGEzav9osqm9L-0Rl68_TFWkQGy6JOdcpadmBnDPL37-Bd_5fsLgYAE",
        p: "9p3JCa964jJ7XiiAWkYuCF1E1AjAvUUwOAEymGMeohAJvD_Q-pgIL1urilvdeOwyZDgUQ-dXnkXJev09H-CDGQeonTWyLl6qT36aB7Kuk9qzkpW9Niz018K_UNx5abX4sQrs_H5M_PC4uxt-8vZLJCOMp2WCclWqKVLGeqmJCCSwQaI9swJRd5Bxq3XYqt00AcNTosQPFPwpwj32eZGbOTgFpZq1NPwIf5iASumiZSMotQVdREjLdeOGw2R6OveJUpedyxrIBTKOlhcduYreNz8VKPEKQELLOHVK7oTyjOGJ5peWdmhO0XzGvlSZFzuiJARDTchMgWrfCCN17v4RYQ",
        q: "5SAm3pZxNwfW_50DgD20addP7ESbcZZd8AyseqBEks0VRKn550jBVxr3HtH1fR3XLsR5Pn6tE90TUvClGZd6QaxEiF1Ye8cTY1ryFV_Fmze8fSyvKcdmEKDvJaMYlhf32p0Ju8ucjNwq5xvnO4mYzGDHWXalgD_A45VszH8g2T0Wc1OUp-8XomGfGrj3enWjLxHZNUguGcU4CUf6U9ql4rWfhL7UPDCggTl0lEVpsBQiagsW8a6yGWKjgCBEpz8X_YZRfebJp7nRPxvtW6xU419JBm_bEARCwEuiBNb434pJxJXvQAd8AFcqX1zSbjaYAHh_oLKjEITJqzrqXx0NXQ",
        dp: "lo_QK_yZTj25ucuKSRLtiae_nJ_XY_Y4sQhyJjzld9XIy8g-Qq_M13Tk7qyVMv0o6qyeGrLDeFps3ox649pCz2YwmAIvTUX4Pl4xlZ-OG7B6z3RhtxCNTqiT-r8P1O0G7reX5bMKN6aTcZAg2h5p059sgMplcH5CS8ZAbKTSh0k23ms5te8lY5SpASAKbo5r8OOaTRXbi1lD-VWxA5lUpgNA11Dzbmysl5G4SYQH5C0p7hJfVZAHv2pwXRwbz6JOkUEFUfmAwkOSb6mfOSbB8gKuXXeDZaYhwc9CNwqttjr_4OsNLi8SZ60A_TRS3q9GlyyPFo7BvoVLswFLP-SXIQ",
        dq: "BYNtjAOgu8tDgCkeEXLqqXVV5gCMoQIWRpV3fQfoPoQS0_EnI0qb5GWwtpwkxRr3t5dgt4FC1uyF74P85Q3BEl171LAyVeAndkeU9bC1R5PixDxUBrRWn2XP-17eU5ZGD4uh1VQD81vE6ITCXqtj8t8NTPjO6LQgBxnsYUtZ1gBjTuke9Z-KOQ0SUAlNYzP7dkF-sYqIGXSmcYq62lOzlC38pawV3VDqO9HPHVZCQctqPJUBu1UR0gyOlKGyJTgecqpNwbLQ_Wk6QMOCRady73m2fyIn6k2_8XKgdm9Z0783ITTeafMEJ9nxGhRYt_A2XiSIJazGwboARE-JnjpLvQ",
        qi: "y30NbB_LGbTwPKZ0qVZbazZh_SnnBMagTSfmssqelrUsiEstSKGsZVk1GyhAHzpoXasDGue81xlsHYp0qGzdSwsJOSFG6Qidi4MeDsTRWU62Bp8KOhah1nqvwVj9VwJwrtkf8N-crjbyzTgnJ5B2gX_NAZg0NFvoZ4lsPh7fDEQcB2P2Zu01Vwt-Zs_1qlMc4aDqVyN-TShgkSoNaH6PLwysI51BPh0Uc0XerjNwRZYPP2FdtSEVJO80apHwuOP0og6z8dBC2hTzKl6NOvbQ0Ft1cFA7-giYtFJ1aDc5oO4wpA2eTpo62Mvm6KPMWNmKdDJw8t9e3Bb0Md8fR5titQ",
      });

      console.log("https://arweave.net/" + metaTransaction.id);
      const metaDataUrl = "https://arweave.net/" + metaTransaction.id;

      let response2 = await arweave.transactions.post(metaTransaction);
      // console.log(response2);

      // console.log("successfully uploaded image and metadata");

      // -------------------------------
      //saving the arweave transaction and nft details to DB

      axios
        .post(
          // "https://shortgun-backend.herokuapp.com/nft/createNFT",
          `${REACT_APP_SERVER_URL}/nft/createNFT`,
          {
            nftUrl: metaDataUrl,
            nftImageUrl: imageUrl,
            nftName: meta.name,
            nftSymbol: meta.symbol,
            nftDescription: meta.description,
            seller_fee_basis_points: meta.seller_fee_basis_points,
            nftTraitType: meta.trait_type,
            nftValue: meta.value,
            nftCategory: meta.category,
            walletAddress: meta.walletAddress,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          window.alert("NFT Created Successfully!");
          console.log("NFT Creation Successful!");
          localStorage.setItem("nftId", JSON.stringify(response.data.nftId));
          // navigate("/");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Something Went Wrong. Please recreate your NFT");
          // console.log("Server Error");
        });
    }
  };

  return (
    <>
      <NFTNavbar />
      <h1
        className="text-center my-3"
        style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "700",
        }}
      >
        Create NFT
      </h1>
      <div className="upload-header">
        {/* ----------------------------Image Uploading Section---------------------- */}

        <Container maxWidth="sm">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI

              <div className="upload__image-wrapper">
                <Button
                  variant="contained"
                  // style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                  style={{ backgroundColor: "#6739b7" }}
                >
                  Click or Drop your NFT
                </Button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.dataURL} alt="" width="400" />
                    {/* <Stack direction = "row" spacing={1}> */}

                    <div className="image-item__btn-wrapper">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Button
                          variant="contained"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </Button>

                        <Button
                          variant="contained"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </Button>
                      </Stack>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Container>

        {/* ----------Metadata Section -------------------------------- */}
        <Box>
          <div>
            {/* cl */}
            <Box m={3}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <TextField
                  label="NFT Name"
                  value={meta.name}
                  name="name"
                  onChange={onChangeData}
                  // required={true}
                  required
                />
                <TextField
                  label="NFT Symbol"
                  value={meta.symbol}
                  name="symbol"
                  onChange={onChangeData}
                  required
                />
              </Stack>
            </Box>
            <Box m={3}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <TextField
                  label="NFT Description"
                  value={meta.description}
                  name="description"
                  onChange={onChangeData}
                  required
                />
                <TextField
                  label="Seller Fee Basis Point"
                  value={meta.seller_fee_basis_points}
                  name="seller_fee_basis_points"
                  onChange={onChangeData}
                  required
                />
              </Stack>
            </Box>

            <Box>
              <div>
                <Box m={2}>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <TextField
                      placeholder="eg. Eyes"
                      label="Trait Type"
                      value={meta.trait_type}
                      name="trait_type"
                      onChange={onChangeData}
                      required
                    />
                    <TextField
                      placeholder="Value"
                      label="Value"
                      value={meta.value}
                      name="value"
                      onChange={onChangeData}
                      required
                    />
                  </Stack>
                </Box>
              </div>
            </Box>

            {/* Properties */}

            <Box>
              <Box m={3}>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <TextField
                    placeholder="image/png"
                    label="File Type"
                    value={meta.files[0].type}
                    name="type"
                    onChange={onChangePropType}
                    required
                  />
                  <TextField
                    label="Category of NFT"
                    placeholder="image"
                    value={meta.category}
                    name="category"
                    onChange={onChangeData}
                    required
                  />
                </Stack>
              </Box>
            </Box>

            <Box>
              <div>
                <Box m={2}>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <TextField
                      autoFocus
                      margin="normal"
                      required
                      fullWidth
                      type={"text"}
                      label="Wallet Address"
                      value={meta.walletAddress}
                      name="walletAddress"
                      onChange={onChangeData}
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <MdOutlineAccountBalanceWallet />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Box>
              </div>
            </Box>
          </div>
        </Box>

        <Button
          variant="contained"
          onClick={Ar}
          size="large"
          style={{ backgroundColor: "#6739b7" }}
        >
          Create NFT
        </Button>
      </div>
    </>
  );
};

export default Upload;
