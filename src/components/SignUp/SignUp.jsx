import { useState } from "react";
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
import { SignUpSchema } from "./validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fireAuth } from "../firebase/fireBase-config";
import { dynamicHr } from "../../theme/navBar";

const SignUp = ({ close }) => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");

  const signupHandleClickOpen = () => {
    setOpen(true);
  };

  const signupHandleClose = () => {
    setOpen(false);
    close();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      licence: "",
      phone: "",
      address: "",
      city: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      // Handle form submission here
      // console.log(values);
    },
  });

  const handleSignup = async () => {
    try {
      formik.handleSubmit();

      await new Promise((resolve) => setTimeout(resolve, 100));

      const { email, password } = formik.values;
      const userCredential = await createUserWithEmailAndPassword(
        fireAuth,
        email,
        password
      );

      const user = userCredential.user;

      // Clear form fields
      formik.resetForm();
      setSnackbarMessage("User successfully registered");
      setSnackbarColor(green[400]);
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage("User registration failed");
      setSnackbarColor(red[400]);
      setOpenSnackbar(true);
    }
  };
  return (
    <>
      <Box onClick={signupHandleClickOpen} color={"yellow"}>
        Register here..!
      </Box>

      <Dialog
        open={open}
        onClose={signupHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        PaperProps={{
          style: {
            padding: 20,
            background: "linear-gradient(to right, #868f96 0%, #596164 100%)",
            display: "flex",
            flexDirection: "column",
            maxHeight: "95%"
          },
        }}
      >
        {/* <Paper
          elevation={3}
          style={{
            overflowY: "hidden", // Adding scrollbar if needed
            padding: 20,
            background: "linear-gradient(to right, #868f96 0%, #596164 100%)",
          }}
        > */}
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Sign Up
            <hr style={dynamicHr} />
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Licence no."
                name="licence"
                value={formik.values.licence}
                onChange={formik.handleChange}
                error={formik.touched.licence && Boolean(formik.errors.licence)}
                helperText={formik.touched.licence && formik.errors.licence}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                placeholder="Password"
                type="password" 
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
          <div style={{ flex: 1 }}></div> {/* Spacer to push content upwards */}
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
                  position: "sticky", // Ensuring the button remains sticky
                  bottom: 20, // Adjust this value as needed
                }}
                onClick={handleSignup}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        {/* </Paper> */}
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={openSnackbar}
          autoHideDuration={3000}
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

export default SignUp;
