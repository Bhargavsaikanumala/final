import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    orderId: '',
    orderDate: '',
    totalAmount: '',
    pharmacistId: '',
    supplierId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Form submitted:', orderData);
    // Reset the form fields
    setOrderData({
      orderId: '',
      orderDate: '',
      totalAmount: '',
      pharmacistId: '',
      supplierId: '',
    });
  };

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="orderId"
            label="Order ID"
            variant="outlined"
            value={orderData.orderId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="orderDate"
            type="date"
            InputLabelProps={{ shrink: true }} // Ensure the label doesn't merge
            label="Order Date"
            variant="outlined"
            value={orderData.orderDate}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="totalAmount"
            label="Total Amount"
            variant="outlined"
            value={orderData.totalAmount}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="pharmacistId"
            label="Pharmacist ID"
            variant="outlined"
            value={orderData.pharmacistId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="supplierId"
            label="Supplier ID"
            variant="outlined"
            value={orderData.supplierId}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Create Order
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
};

export default CreateOrder;
