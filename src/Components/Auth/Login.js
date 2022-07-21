import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useWallet } from "@solana/wallet-adapter-react";
const { REACT_APP_SERVER_URL } = process.env;

const theme = createTheme();

const Login = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const [publicID, setpublicID] = useState("");

  useEffect(() => {
    setpublicID(publicKey?.toBase58());
  }, [publicKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);

    const config = {
      header: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    if (publicKey) {
      // console.log(email,password);
      axios
        .post(
          // "https://shortgun-backend.herokuapp.com/user/signin",
          `${REACT_APP_SERVER_URL}/user/signin`,
          {
            publicID,
          },
          config,
        )
        .then((response) => {
          console.log(response.data);
          // window.alert("Login Successful!");
          console.log("Login Successful!");
          localStorage.setItem("jwt", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem(
            "walletAddress",
            publicKey ? publicKey.toBase58() : ""
          );
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Server Error");
          // console.log("Server Error");
        });
      // alert('Login Success');
    } else {
      alert("Please Enter Valid Details");
      // console.log(values);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type={"text"}
              label="Public Id"
              value={publicID}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <WalletMultiButton
                      startIcon={<MdOutlineAccountBalanceWallet />}
                    />
                  </InputAdornment>
                ),
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#6739b7" }}
            >
              Sign In
            </Button>

            <Grid container sx={{ mt: 2 }}>
              <Grid item>
                <Link href="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid container sx={{ mt: 2 }}>
          <Grid item>
            <Link href="/">Back to Homepage</Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
