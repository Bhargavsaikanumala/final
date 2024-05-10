import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const DeleteOrder = () => {
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Order ID to delete:', orderId);
    // Reset the form field
    setOrderId('');
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
            value={orderId}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Delete Order
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
};

export default DeleteOrder;
