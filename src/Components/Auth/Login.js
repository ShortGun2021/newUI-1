import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { IconButton, InputAdornment } from "@mui/material";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (email !== "" && password !== "") {
      // console.log(email,password);
      axios
        .post(
          "https://shortgun-backend.herokuapp.com/user/signin",
          // "http://localhost:5000/user/signin",
          {
            email,
            password,
          },
          config
        )
        .then((response) => {
          console.log(response.data);
          // window.alert("Login Successful!");
          console.log("Login Successful!");
          localStorage.setItem("jwt", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              id="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
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
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/">Forgot Password ?</Link>
              </Grid>
            </Grid>{" "}
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
