import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productPopulation, setProductPopulation] = useState('');
  const [productSize, setProductSize] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handleProductPopulationChange = (event) => {
    setProductPopulation(event.target.value);
  };

  const handleProductSizeChange = (event) => {
    setProductSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform further actions, such as sending the data to a backend server
    console.log('Product added:', productName, productCode, productPopulation, productSize);
    // Reset the form fields after submission
    setProductName('');
    setProductCode('');
    setProductPopulation('');
    setProductSize('');
  };

  const calculateDensity = () => {
    const population = parseInt(productPopulation);
    const size = parseInt(productSize);
    if (population && size) {
      return (population / size).toFixed(2);
    }
    return '';
  };

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '20px' }}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Product Name"
            variant="outlined"
            value={productName}
            onChange={handleProductNameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Product ID"
            variant="outlined"
            value={productCode}
            onChange={handleProductCodeChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Supplier ID"
            variant="outlined"
            value={productPopulation}
            onChange={handleProductPopulationChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            value={productSize}
            onChange={handleProductSizeChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            variant="outlined"
            value={calculateDensity()}
            disabled
            fullWidth
            margin="normal"
          />
          <TextField
            label="Unit Price"
            variant="outlined"
            value={calculateDensity()}
            disabled
            fullWidth
            margin="normal"
          />
          <TextField
            label="Reorder Level"
            variant="outlined"
            value={calculateDensity()}
            disabled
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add Product
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
}

export default AddProduct;
