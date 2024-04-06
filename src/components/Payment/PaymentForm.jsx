import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import { Box, Grid, Typography, TextField, Paper, Button } from "@mui/material";
import { useFormik } from "formik";
import logo from "../../Images/logoNew.png";
import {
  Razor_API_KEY,
  emailJs_Api,
  email_PublicKey,
  email_ServiceId,
  email_TemplateId,
} from "./constant.js";
import axios from "axios";
import { paymentValidationSchema } from "../SignUp/validation.jsx";
import { useLogin } from "../Contexts/LoginContext.jsx";

const payKey = Razor_API_KEY;

const PaymentForm = () => {
  const { isLoggedIn } = useLogin();
  const [Razorpay] = useRazorpay();
  const location = useLocation();
  const { cardData } = location.state;
  const navigate = useNavigate();

  const [paymentStatus, setPaymentStatus] = useState(null);

  const exchangeRate = 60;
  const usdAmount = Number(cardData.charge);
  const inrAmount = usdAmount * exchangeRate;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "asd",
      email: "guptaakhil0206@gmail.com",
      phone: "9999999999",
      address: "asd",
      city: "asd",
    },
    validationSchema: paymentValidationSchema,
    onSubmit: async (values) => {
      //console.log(values);
      handlePaymentSuccess(values.firstName, values.email);
    },
  });

  const handlePaymentSuccess = async (firstName, email) => {
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = email_ServiceId;
    const templateId = email_TemplateId;
    const publicKey = email_PublicKey;

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: "Polar's Car Service",
        from_email: `polar.service@cars.com`,
        to_name: email,
        message: `Hi ${firstName} from Polar's Car.
                  Please have your keys from our nearest
                  store.
                  `,
      },
    };

   //Send the email using EmailJS
    try {
      const res = await axios.post(emailJs_Api, data);
     // console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const openRazorpayCheckout = (firstName, email, phone) => {
    const options = {
      key: payKey,
      amount: inrAmount * 90, // Amount in paise (100 paise = 1 INR)
      currency: "INR",
      name: "Rental Cars",
      description: "Purchase Description",
      image: logo,
      handler: async (response) => {
        try {
          await handlePaymentSuccess(firstName, email);
              setTimeout(() => {
              navigate('/payment-success',{ state: { mail: email,name:firstName} });
            }, 2000);
        } catch (error) {
          alert("Payment failed. Please try again."); // Show alert message for failed payment
        }
      },
      prefill: {
        name: firstName,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#e0312c",
      },
    };
    const rayzorPay = new Razorpay(options);

    rayzorPay.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.step);
      alert(response.error.reason);
    });

    rayzorPay.open();
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
    }
  };

  return (
    <Box>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="First name"
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
              label="Last name"
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
              label="Phone no."
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
              //onClick={handleBookNow}
              onClick={
                isLoggedIn
                  ? handleBookNow
                  : () => alert("Please login to book the car.")
              }
              disabled={!isLoggedIn}
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
