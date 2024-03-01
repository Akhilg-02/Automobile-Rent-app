import { useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import useRazorpay from "react-razorpay";
import { Box, Grid, Typography, TextField, Paper, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../Images/logoNew.png";
import { API_KEY } from "./constant.js";


const payKey = API_KEY;
console.log("env200",payKey);


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
});

const PaymentForm = () => {
  const [Razorpay] = useRazorpay();
  // const location = useLocation();
  // const { cardData } = location;

  // //const price = cardData.price / 100;;
  //   const exchangeRate = 73.5;
  //   const usdAmount = Number(cardData.price);
  //   console.log("AMOUNT",usdAmount);
  //   const inrAmount = usdAmount * exchangeRate;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "asd",
      email: "john@example.com",
      phone: "9999999999",
      address: "asd",
      city: "asd",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  //---------------------------------
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentSuccess = (response) => {
    setPaymentStatus("Payment successful!");
    // You can perform additional actions here, like updating your database or displaying a confirmation message.
  };

  const handlePaymentError = (error) => {
    setPaymentStatus("Payment failed!");
    console.error(error);
  };

  const openRazorpayCheckout = (firstName, email, phone) => {
    const options = {
      key: payKey,
      amount: 2000, // Amount in paise (100 paise = 1 INR)
      currency: "INR",
      name: "Your Company Name",
      description: "Purchase Description",
      image:  logo ,
      handler: handlePaymentSuccess,
      prefill: {
        name: firstName,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    // const razorpay = new window.Razorpay(options);
    // razorpay.open();
    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  const handleBookNow = () => {
    // Trigger form validation
    formik.handleSubmit();

    // Check if all fields have been touched and form is valid
    if (
      formik.isValid &&
      Object.keys(formik.touched).length === Object.keys(formik.values).length
    ) {
      // Extract values from the form
      const { firstName, email, phone } = formik.values;

      // Call openRazorpayCheckout with form values
      openRazorpayCheckout(firstName, email, phone);
    } else {
      // If form is not valid or some fields are not touched, you can handle it accordingly (e.g., show error message)
      console.log("Form is not valid or some fields are not touched");
    }
  };

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
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
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
                backgroundColor: "#6A5ACD",
              }}
              onClick={handleBookNow}
            >
              Book Now
            </Button>
            {paymentStatus && <p>{paymentStatus}</p>}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PaymentForm;
