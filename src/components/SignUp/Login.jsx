import { useState } from "react";
import { Box, Grid, Typography, TextField, Paper, Button, Dialog } from "@mui/material";
import { useFormik } from "formik";
import { LoginSchema } from "./validation";





const Login = () => {

  const [open, setOpen] = useState(false);

  const loginHandleClickOpen = () => {
    setOpen(true);
  };

  const loginHandleClose = () => {
    setOpen(false);
  };


    const formik = useFormik({
        initialValues: {
          email: "guptaakhil0206@gmail.com",
          password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
          console.log(values);
        },
      });

      const handleLogin = () => {
        // Trigger form validation
        formik.handleSubmit();
        
    
        // Check if all fields have been touched and form is valid
        // if (
        //   formik.isValid &&
        //   Object.keys(formik.touched).length === Object.keys(formik.values).length
        // ) {
        //     console.log("Form is valid");
        //   // Extract values from the form
        //   const { firstName, email, phone } = formik.values;
    
        //   // Call openRazorpayCheckout with form values
        //   //openRazorpayCheckout(firstName, email, phone);
        // } else {
        //   // If form is not valid or some fields are not touched, you can handle it accordingly (e.g., show error message)
        //   console.log("Form is not valid or some fields are not touched");
        // }
      };
    
  return (
    <>
    <Box onClick={loginHandleClickOpen}>
      Login
    </Box>
    {/* <Button variant="outlined" onClick={loginHandleClickOpen}>
        Open alert dialog
      </Button> */}
    <Dialog
        open={open}
        onClose={loginHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Paper elevation={3} style={{ padding: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                formik.touched.email && Boolean(formik.errors.email)
              }
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
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
              onClick={handleLogin}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
      </Dialog>
    </>
  )
}

export default Login