import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const AddInventory = () => {
  const [inventoryData, setInventoryData] = useState({
    inventoryId: '',
    productId: '',
    supplierId: '',
    batchNumber: '',
    purchaseDate: '',
    manufacturedDate: '',
    purchasePrice: '',
    quantity: '',
    expirationDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({ ...inventoryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Form submitted:', inventoryData);
    // Reset the form fields
    setInventoryData({
      inventoryId: '',
      productId: '',
      supplierId: '',
      batchNumber: '',
      purchaseDate: '',
      manufacturedDate: '',
      purchasePrice: '',
      quantity: '',
      expirationDate: '',
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
            name="inventoryId"
            label="Inventory ID"
            variant="outlined"
            value={inventoryData.inventoryId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="productId"
            label="Product ID"
            variant="outlined"
            value={inventoryData.productId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="supplierId"
            label="Supplier ID"
            variant="outlined"
            value={inventoryData.supplierId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="batchNumber"
            label="Batch Number"
            variant="outlined"
            value={inventoryData.batchNumber}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="purchaseDate"
            label="Purchase Date"
            type="date"
            variant="outlined"
            value={inventoryData.purchaseDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }} // Added shrink property
          />
          <TextField
            fullWidth
            margin="normal"
            name="manufacturedDate"
            label="Manufactured Date"
            type="date"
            variant="outlined"
            value={inventoryData.manufacturedDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }} // Added shrink property
          />
          <TextField
            fullWidth
            margin="normal"
            name="purchasePrice"
            label="Purchase Price"
            variant="outlined"
            value={inventoryData.purchasePrice}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="quantity"
            label="Quantity"
            variant="outlined"
            value={inventoryData.quantity}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="expirationDate"
            label="Expiration Date"
            type="date"
            variant="outlined"
            value={inventoryData.expirationDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }} // Added shrink property
          />
          <Button type="submit" variant="contained" color="primary">
            Add Inventory
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
};

export default AddInventory;
