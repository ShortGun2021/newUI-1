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

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState("");
  const [showPassword2, setShowPassword2] = useState("");

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (username !== "" && email !== "" && password === confirmPassword) {
      // console.log(email,password);
      axios
        .post(
          "https://shortgun-backend.herokuapp.com/user/register",
          // "http://localhost:5000/user/signin",
          {
            username,
            email,
            password,
            confirmPassword,
          },
          config
        )
        .then((response) => {
          console.log(response.data);
          window.alert("Registeration Successful!");
          console.log("Register Successful!");
          navigate("/login");
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
            Register
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
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              type="text"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              id="password"
              autoComplete="confirm-password"
              type={showPassword2 ? "text" : "password"}
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword2} edge="end">
                      {showPassword2 ? (
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
              style={{backgroundColor:"#6739b7"}}
            >
              Register
            </Button>

            <Grid container sx={{ mt: 2 }}>
              <Grid item>
                <Link href="/login">Already have an account? LogIn</Link>
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

export default Register;
