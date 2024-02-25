import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
  });


const PaymentForm = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
          // Handle form submission here
          console.log(values);
        },
      });
  return (
    <Box>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
             fullWidth
             label="First Name"
             name="firstName"
             value={formik.values.firstName}
             onChange={formik.handleChange}
             error={formik.touched.firstName && Boolean(formik.errors.firstName)}
             helperText={formik.touched.firstName && formik.errors.firstName}
             />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
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
                backgroundColor:"#6A5ACD"
              }}
              onClick={()=>formik.handleSubmit()}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PaymentForm;
