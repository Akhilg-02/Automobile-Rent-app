import { useState } from "react";
import { Box, Grid, Typography, TextField, Paper, Button,Dialog } from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from "./validation";

const SignUp = ({close}) => {

  const [open, setOpen] = useState(false);

  const signupHandleClickOpen = () => {
    setOpen(true);
    
  };

  const signupHandleClose = () => {
    setOpen(false);
    close()
  };


    const formik = useFormik({
        initialValues: {
          name: "",
          email: "guptaakhil0206@gmail.com",
          licence:"4485415",
          phone: "9999999999",
          address: "asd",
          city: "asd",
          password: "password",
        },
        validationSchema: SignUpSchema,
        onSubmit: async (values) => {
          // Handle form submission here
          console.log(values);
        },
      });

      const handleSignup = () => {
        // Trigger form validation
        formik.handleSubmit();
    
        // Check if all fields have been touched and form is valid
        if (
          formik.isValid &&
          Object.keys(formik.touched).length === Object.keys(formik.values).length
        ) {
            console.log("Form is valid");
          // Extract values from the form
         // const { firstName, email, phone } = formik.values;
    
        } else {
          // If form is not valid or some fields are not touched, you can handle it accordingly (e.g., show error message)
          console.log("Form is not valid or some fields are not touched");
        }
      };
  return (
    <>
    <Box onClick={signupHandleClickOpen}>
      Create Account...Sign up!
    </Box>
    <Dialog
        open={open}
        onClose={signupHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Paper elevation={3} style={{ padding: 20, verflowY:'hidden',height:"800px"}}>
        <Typography  variant="h3" style={{ textAlign:"center" }}>
          Sign Up
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={
                formik.touched.name && Boolean(formik.errors.name)
              }
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Email"
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
              label="Licence no."
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
              label="Phone"
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
              label="Address"
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
              label="City"
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
              onClick={handleSignup}
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

export default SignUp