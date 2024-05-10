import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const EditSupplier = () => {
  const [supplierData, setSupplierData] = useState({
    supplierId: '',
    supplierName: '',
    contactNumber: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierData({ ...supplierData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Form submitted:', supplierData);
    // Reset the form fields
    setSupplierData({
      supplierId: '',
      supplierName: '',
      contactNumber: '',
      email: '',
      address: '',
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
            name="supplierId"
            label="Supplier ID"
            variant="outlined"
            value={supplierData.supplierId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="supplierName"
            label="Supplier Name"
            variant="outlined"
            value={supplierData.supplierName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="contactNumber"
            label="Contact Number"
            variant="outlined"
            value={supplierData.contactNumber}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            variant="outlined"
            value={supplierData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="address"
            label="Address"
            variant="outlined"
            value={supplierData.address}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
};

export default EditSupplier;
