import "../../Css/PaymentSuccess.css";
import { Box, Grid, Typography, TextField, Paper, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import success from "../../Images/paySuccess.jpg";

const PaymentSuccess = () => {
  const location = useLocation();
  const { mail, name } = location.state;
  return (
    <Box className="payment-success-container" t={18}>
      <div className="image-container">
        <img src={success} alt="Car" className="car-image" />
      </div>
      <div className="payment-success-message">
        <h2 className="success-heading">Payment Successful!</h2>
        <p className="message">
          Congratulations! {name} Your payment has been successfully processed,
          and we have sent an email to &nbsp;
          <span className="user-email">{mail}</span> .<br />
          Enjoy your ride!
        </p>
        <p className="thank-you">Thank you for choosing our service.</p>
      </div>
      <Link to="/">
        <Button className="dashbord-btn" variant="contained" color="success">
          Back to Dashboard
        </Button>
      </Link>
    </Box>
  );
};

export default PaymentSuccess;
