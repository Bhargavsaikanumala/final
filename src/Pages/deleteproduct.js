import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

function DeleteProduct({ onDelete }) {
  const [productId, setProductId] = useState('');

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleDelete = () => {
    // Call the onDelete function with the product ID as a parameter
    onDelete(productId);
  };

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '20px' }}>
        <h2>Delete Product</h2>
        <TextField
          label="Product ID"
          variant="outlined"
          value={productId}
          onChange={handleProductIdChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete
        </Button>
      </Paper>
      <Footer />
    </div>
  );
}

export default DeleteProduct;
