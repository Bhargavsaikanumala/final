import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const DeleteInventory = () => {
  const [inventoryId, setInventoryId] = useState('');

  const handleChange = (e) => {
    setInventoryId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Inventory ID to delete:', inventoryId);
    // Reset the form field
    setInventoryId('');
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
            value={inventoryId}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Delete Inventory
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
};

export default DeleteInventory;
