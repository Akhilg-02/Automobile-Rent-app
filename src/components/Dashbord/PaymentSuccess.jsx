
import "../../Css/PaymentSuccess.css"
import { Box, Grid, Typography, TextField, Paper, Button } from "@mui/material";

const PaymentSuccess = () => {
  return (
    <Box className="payment-success-container" mt={4}>
    <div className="payment-success-message">
      <h2 className="success-heading">Payment Successful!</h2>
      <p className="message">
        Congratulations! Your payment has been successfully processed, and we have sent an Email 
      </p>
      <p className="thank-you">Thank you for choosing our service.</p>
    </div>
    <div className="image-container">
      <img src="" alt="Car" className="car-image" />
    </div>
  </Box>
  )
}

export default PaymentSuccess