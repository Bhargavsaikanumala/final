import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

function EditProduct({ product, onSave }) {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [reorderLevel, setReorderLevel] = useState('');

  useEffect(() => {
    if (product) {
      setProductName(product.productName || '');
      setProductCode(product.productCode || '');
      setSupplierId(product.supplierId || '');
      setDescription(product.description || '');
      setCategory(product.category || '');
      setUnitPrice(product.unitPrice || '');
      setReorderLevel(product.reorderLevel || '');
    }
  }, [product]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handleSupplierIdChange = (event) => {
    setSupplierId(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleUnitPriceChange = (event) => {
    setUnitPrice(event.target.value);
  };

  const handleReorderLevelChange = (event) => {
    setReorderLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      ...product,
      productName: productName,
      productCode: productCode,
      supplierId: supplierId,
      description: description,
      category: category,
      unitPrice: unitPrice,
      reorderLevel: reorderLevel,
    };
    onSave(updatedProduct);
  };

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '20px' }}>
        <h2>Edit Product</h2>
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
            value={supplierId}
            onChange={handleSupplierIdChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            variant="outlined"
            value={category}
            onChange={handleCategoryChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Unit Price"
            variant="outlined"
            value={unitPrice}
            onChange={handleUnitPriceChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Reorder Level"
            variant="outlined"
            value={reorderLevel}
            onChange={handleReorderLevelChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
}

export default EditProduct;
