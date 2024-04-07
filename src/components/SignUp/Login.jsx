import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  Dialog,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import { useFormik } from "formik";
import { LoginSchema } from "./validation";
import SignUp from "./SignUp";
import { signInWithEmailAndPassword} from "firebase/auth";
import { fireAuth } from "../firebase/fireBase-config";
import { useLogin } from "../Contexts/LoginContext";
import { dynamicHr } from "../../theme/navBar";


const Login = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");
  const { login, setLoggedIn } = useLogin();


  const loginHandleClickOpen = () => {
    setOpen(true);
  };

  const loginHandleClickClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "Chirag123@yahoo.com",
      password: "Chirag123",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      //console.log(values);
      try {
        const { email, password } = values;
        const userCredential = await signInWithEmailAndPassword(
          fireAuth, // Ensure fireAuth is properly imported
          email,
          password
        );

        console.log("userCredential",userCredential);

        // Clear form fields  
        formik.resetForm();
        setSnackbarMessage('User logged in successfully');
        setSnackbarColor(green[400]);
        setOpenSnackbar(true);
        // Update the login state upon successful login-Context
        login();
        setLoggedIn(true);
      } catch (error) {
        setSnackbarMessage('User login failed');
        setSnackbarColor(red[400]);
        setOpenSnackbar(true);
      }
    
    },
  });

  return (
    <>
      <Box onClick={loginHandleClickOpen}>
        Login
      </Box>
      <Dialog
        open={open}
        onClose={loginHandleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Paper elevation={3} style={{ 
        padding: 20,
        borderRadius:"0px",
        background: 'linear-gradient(to right, #868f96 0%, #596164 100%)',
        }}>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Login
            <hr style={dynamicHr} />
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="First Name"
                name="firstName"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={3}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  width: "20vw",
                  padding: "1rem",
                  backgroundColor: "#6A5ACD",
                }}
                 onClick={formik.handleSubmit}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Box>
            <Typography
              style={{ textAlign: "center", cursor: "pointer" }}
              mt={2}
            >
              <SignUp close={loginHandleClickClose} />
            </Typography>
          </Box>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={openSnackbar}
          autoHideDuration={2200}
          onClose={handleSnackbarClose}
        >
          <SnackbarContent
            style={{ backgroundColor: snackbarColor }}
            message={
              <Box display="flex" alignItems="center">
                {snackbarColor === green[600] ? (
                  <CheckCircleOutline sx={{ marginRight: 1 }} />
                ) : (
                  <ErrorOutline sx={{ marginRight: 1 }} />
                )}
                {snackbarMessage}
              </Box>
            }
          />
        </Snackbar>
      </Dialog>
    </>
  );
};

export default Login;
