import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const DeleteSupplier = () => {
  const [supplierId, setSupplierId] = useState('');

  const handleChange = (e) => {
    setSupplierId(e.target.value);
  };

  const handleDelete = () => {
    // Add your logic here to handle the deletion
    console.log('Deleting supplier with ID:', supplierId);
    // Reset the input field
    setSupplierId('');
  };

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '20px' }}>
        <TextField
          fullWidth
          margin="normal"
          name="supplierId"
          label="Supplier ID"
          variant="outlined"
          value={supplierId}
          onChange={handleChange}
        />
        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete Supplier
        </Button>
      </Paper>
      <Footer />
    </div>
  );
};

export default DeleteSupplier;
